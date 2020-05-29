import { injectable } from "inversify";
import {
    InvoiceDisplayForm,
    CdnKey
} from "domain/entity";
import DocumentManager from "document";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import AWS from "aws-sdk";
import axios from "axios";
import * as ApiManager from "data/remote/ApiManager";

@injectable()
export default class DocumentManagerImpl implements DocumentManager {

    formatNumber(num: number): string {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    // 사업자등록증 br
    // 통장사본 ba
    // 프로필이미지 pi
    // 주문요청이미지 tsk
    // 상품이미지 prd

    uploadBusinessRegisterImage(file: File): Promise<string> {
        const accessKey: any = localStorage.getItem("accessKey")
        const s3Url = "https://s3.ap-northeast-2.amazonaws.com/";
        const s3Bucket = "cdn.sell-up.co.kr/br"; // 사업자등록증 br
        AWS.config.update({
            region: "ap-northeast-2",
            accessKeyId: "AKIA5434HLRBL5PJVU53",
            secretAccessKey: "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",
        })
        var s3 = new AWS.S3();
        const key = file.name
        var params = {
            Bucket: s3Bucket,
            Key: key,
            Expires: 1000,
            ContentType: "multipart/form-data",
            ACL: "public-read"
        }
        const config = {
            headers: {
                accessKey: JSON.parse(accessKey).accessKey
            }
        }
        // return new Promise((resolve, reject) => {
        //     return s3.getSignedUrl("putObject", params, (err, data) => {
        //         if (err) {
        //             return reject("error")
        //         } else {
        //             return axios.put(data, file, {
        //                 headers: {
        //                     "Access-Control-Allow-Origin": "*",
        //                     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
        //                     "Access-Control-Allow-Headers": "*",
        //                     "Content-Type": file.type
        //                 }
        //             })
        //                 .then(() => {
        //                     var url = s3Url + s3Bucket + "/" + key;
        //                     resolve(url)
        //                 })
        //                 .catch(() => {
        //                     reject("error")
        //                 });
        //         }
        //     });
        // })
        return new Promise((resolve, reject) => {
            return axios.get(`${ApiManager.BASE_URL}/cdn_key`, config)
                .then(res => {
                    const result: CdnKey = res.data
                    return result
                })
                .then((res) => {
                    const fileName = res.value.toString()
                    params.Key = res.value.toString()
                    return s3.getSignedUrl("putObject", params, (err, data) => {
                        if (err) {
                            return reject("error")
                        } else {
                            return axios.put(data, file, {
                                headers: {
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
                                    "Access-Control-Allow-Headers": "*",
                                    "Content-Type": file.type
                                }
                            })
                                .then(() => {
                                    var url = s3Url + s3Bucket + "/" + fileName 
                                    resolve(url)
                                })
                                .catch(() => {
                                    reject("error")
                                });
                        }
                    });
                })
                .catch(() => {
                    reject("error")
                })
        })
    }

    uploadBankAccountImage(file: File): Promise<string> {
        const accessKey: any = localStorage.getItem("accessKey")
        const s3Url = "https://s3.ap-northeast-2.amazonaws.com/";
        const s3Bucket = "cdn.sell-up.co.kr/ba"; // 통장사본 ba
        AWS.config.update({
            region: "ap-northeast-2",
            accessKeyId: "AKIA5434HLRBL5PJVU53",
            secretAccessKey: "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",
        })
        var s3 = new AWS.S3();
        const key = file.name
        var params = {
            Bucket: s3Bucket,
            Key: key,
            Expires: 1000,
            ContentType: "multipart/form-data",
            ACL: "public-read"
        }
        const config = {
            headers: {
                accessKey: JSON.parse(accessKey).accessKey
            }
        }
        // return new Promise((resolve, reject) => {
        //     return s3.getSignedUrl("putObject", params, (err, data) => {
        //         if (err) {
        //             return reject("error")
        //         } else {
        //             return axios.put(data, file, {
        //                 headers: {
        //                     "Access-Control-Allow-Origin": "*",
        //                     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
        //                     "Access-Control-Allow-Headers": "*",
        //                     "Content-Type": file.type
        //                 }
        //             })
        //                 .then(() => {
        //                     var url = s3Url + s3Bucket + "/" + key;
        //                     resolve(url)
        //                 })
        //                 .catch(() => {
        //                     reject("error")
        //                 });
        //         }
        //     });
        // })
        return new Promise((resolve, reject) => {
            return axios.get(`${ApiManager.BASE_URL}/cdn_key`, config)
                .then(res => {
                    const result: CdnKey = res.data
                    return result
                })
                .then((res) => {
                    const fileName = res.value.toString()
                    params.Key = res.value.toString()
                    return s3.getSignedUrl("putObject", params, (err, data) => {
                        if (err) {
                            return reject("error")
                        } else {
                            return axios.put(data, file, {
                                headers: {
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
                                    "Access-Control-Allow-Headers": "*",
                                    "Content-Type": file.type
                                }
                            })
                                .then(() => {
                                    var url = s3Url + s3Bucket + "/" + fileName;
                                    resolve(url)
                                })
                                .catch(() => {
                                    reject("error")
                                });
                        }
                    });
                })
                .catch(() => {
                    reject("error")
                })
        })
    }

    downloadInvoice(
        retailerName: string,
        data: InvoiceDisplayForm[],
        orderDate: string
    ): void {
        const pdf = pdfMake;
        pdf.vfs = pdfFonts.pdfMake.vfs;
        pdf.fonts = {
            NanumSquare: {
                normal: "NotoSansKR-Regular.otf",
                bold: "NotoSansKR-Bold.otf",
                italics: "NotoSansKR-Regular.otf",
                bolditalics: "NotoSansKR-Regular.otf"
            }
        };

        type Text = {
            text?: string;
            fontSize?: number;
            alignment?: "right" | "center" | "left";
            margin?: number[];
            border?: boolean[];
            dontBreakRows?: boolean;
            borderColor?: string[];
        };

        type InvoiceColumn =
            | Text
            | {
                stack: Text[];
            };

        type InvoiceRow = InvoiceColumn[];

        const thead = [
            {
                text: "도매업체",
                style: "thead",
                alignment: "center",
                fillColor: "black",
                color: "white",
                border: [false, false, false, false]
            },
            {
                text: "주문",
                style: "thead",
                alignment: "center",
                fillColor: "black",
                color: "white",
                border: [false, false, false, false]
            },
            // { text: '반품', style: 'thead', alignment: 'center', fillColor: 'black', color: 'white', border: [false, false, false, false] },
            {
                text: "차감",
                style: "thead",
                alignment: "center",
                fillColor: "black",
                color: "white",
                border: [false, false, false, false]
            },
            {
                text: "합계",
                style: "thead",
                alignment: "center",
                fillColor: "black",
                color: "white",
                border: [false, false, false, false]
            },
            {
                text: "비고",
                style: "thead",
                alignment: "center",
                fillColor: "black",
                color: "white",
                border: [false, false, false, false]
            }
        ];

        const sortedByWholesalerAddress = data.sort((a, b) => {
            if (a.wholesalerAddress > b.wholesalerAddress) {
                return 1;
            } else if (a.wholesalerAddress < b.wholesalerAddress) {
                return -1;
            } else {
                return 0;
            }
        });

        const pdfInvoiceTableData: any = sortedByWholesalerAddress.map(item => {
            let row: InvoiceRow = [
                {
                    stack: [
                        {
                            text: item.wholesalerName
                        },
                        {
                            text: item.wholesalerAddress,
                            fontSize: 7
                        }
                    ],
                    border: [true, true, false, true],
                    borderColor: ["#d5d5d5", "#d5d5d5", "", "#d5d5d5"]
                },
                {
                    text: this.formatNumber(item.pickUpAmount),
                    alignment: "right",
                    border: [false, true, false, true],
                    borderColor: ["", "#d5d5d5", "", "#d5d5d5"]
                },
                // { text: this.formatNumber(item.returnTotal), alignment: 'right', border: [false, true, false, true], borderColor: ['', '#d5d5d5', '', '#d5d5d5'] },
                {
                    stack: [
                        {
                            text: item.returnTotal
                                ? `[반품차감] -${this.formatNumber(item.returnTotal)}`
                                : "",
                            fontSize: 8,
                            alignment: "right"
                        },
                        {
                            text: item.inStoreCredit < 0
                                ? `[매입차감] ${this.formatNumber(item.inStoreCredit)}`
                                : "",
                            fontSize: 8,
                            alignment: "right"
                        }
                    ],
                    border: [false, true, false, true],
                    borderColor: ["", "#d5d5d5", "", "#d5d5d5"]
                },
                {
                    text: this.formatNumber(item.totalAmount),
                    alignment: "right",
                    border: [false, true, false, true],
                    borderColor: ["", "#d5d5d5", "", "#d5d5d5"]
                },
                {
                    stack: [
                        {
                            text: item.inStoreCredit > 0
                                ? `[매입추가] ${this.formatNumber(item.inStoreCredit)}`
                                : "",
                            fontSize: 8,
                            alignment: "right"
                        },
                        {
                            text: item.isTaxInclude ? "[VAT포함]" : "",
                            fontSize: 8,
                            alignment: 'right',
                        }
                    ],
                    border: [false, true, true, true],
                    borderColor: ["", "#d5d5d5", "#d5d5d5", "#d5d5d5"]
                }
            ];
            return row;
        });

        const totalAll =
            data.length === 0
                ? 0
                : data.map(el => el.totalAmount).reduce((acc, curr) => acc + curr);

        // const total = [
        //   { text: '합계', alignment: 'center', color: 'white', fillColor: 'black', colSpan: 4 },
        //   ,
        //   ,
        //   ,
        //   { text: this.formatNumber(totalAll), alignment: 'right', color: 'white', fillColor: 'black' },
        //   { text: "", alignment: 'right', color: 'white', fillColor: 'black' }
        // ];

        pdfInvoiceTableData.unshift(thead);
        //pdfInvoiceTableData.push(total)

        const def: pdfMake.TDocumentDefinitions = {
            pageSize: "A4",
            pageMargins: [24, 100, 24, 100],
            header: {
                table: {
                    widths: [92, "*", "*"],
                    body: [
                        [
                            {
                                image:
                                    "data:image/png;base64,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ASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQAQUCXDF/JSdCBABIkAEiAARIAKOEQiFgvUwZqbYpoAQLX7bCqOCiAARIAJEgAgQASJgNgEhQoKxErPFjiePc9avjXeRzhMBIkAEiAARIAJEgAiMJUDG01gmdIYIEAEiQASIABEgAuMSIONpXDR0gQgQASJABIgAESACYwmQ8TSWCZ0hAkSACBABIkAEiMC4BLIuYFwIwY844gj/tm3bfMXFPf49e0p8/f39/oJ43CcpxPLzY4WFhfGenp54OByOv/TSS3HOOWLN6CACRIAIEAEiQASIwOQEPLtUQUVFRamIx5fAWJovOD+AMR3/GP7xeThXOHnV30sBCNsZ528xwTZB1kZNE5uE0DZ1dHQ0kmH1Hif6RASIABEgAkTAbQRCwdJd0MnO2XZNnjGeZoVCB8SEOAEuohMYS/5dZPUNhOG0DQbVk0xj//L78/7V2traYnWZJJ8IEAEiQASIABFInwAZT6NYYVjtaC7EuULoy2E0zRp12favsDQ3ca79E+N/v2+NRF6zXQEqkAgQASJABIgAERhBgIwn4MBo3OHxOPskZ3w5ht+qRhBy0RcYUi8Jrv1q6tSp99bX10uXIR1EgAgQASJABIiAzQScMJ5cMdtu1apVWlkw+IlwqPT5eIxtwFDZV91sOMnnAp6wI5jQ7+jetbMtHAz+Sg4r2vy8UHFEgAgQASJABIiAAwQcjXnCsFwx1/VLBGdfgrE0z4H6m1lkHN6yu32BwHfa2tqazBRMsogAESACRIAIEIHUBHLG87RkyZJAKFT6ZSYSTToTt2SB4STvqF8wcVkiPvA2Nim8NRQK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",
                                width: "60",
                                fillColor: "white",
                                margin: [16, 24],
                                border: [false, false, false, true],
                                borderColor: ["", "", "", "#d5d5d5"]
                            },
                            {
                                stack: [
                                    {
                                        text: "주식회사 쉐어그라운드(CherGround Inc.)",
                                        margin: [0, 23, 0, 4],
                                        fontSize: 8
                                    },
                                    {
                                        text:
                                            "서울특별시 중구 삼일대로 343 위워크 을지로 13층(저동1가)",
                                        margin: [0, 0, 0, 4],
                                        fontSize: 8
                                    }
                                ],
                                fillColor: "white",
                                color: "black",
                                border: [false, false, false, true],
                                borderColor: ["", "", "", "#d5d5d5"]
                            },
                            {
                                stack: [
                                    {
                                        text: "02)6743-0410",
                                        margin: [0, 23, 0, 4],
                                        fontSize: 8
                                    },
                                    {
                                        text: "info@cherground.com",
                                        margin: [0, 0, 0, 4],
                                        fontSize: 8
                                    }
                                ],
                                fillColor: "white",
                                color: "black",
                                border: [false, false, false, true],
                                borderColor: ["", "", "", "#d5d5d5"]
                            }
                        ]
                    ]
                }
            },
            footer: (currentPage: number, pageCount: number) => {
                return {
                    table: {
                        widths: ["*"],
                        body: [
                            [
                                {
                                    text: `${currentPage} / ${pageCount}`,
                                    alignment: "center",
                                    border: [false, false, false, false]
                                }
                            ]
                        ]
                    },
                    height: 200,
                    margin: [0, 25, 0, 0]
                };
            },
            content: [
                {
                    table: {
                        widths: ["*", "*"],
                        body: [
                            [
                                {
                                    text: retailerName,
                                    fontSize: 18,
                                    bold: true,
                                    alignment: "left",
                                    margin: [0, 0, 0, 8],
                                    border: [false, false, false, false]
                                },
                                {
                                    text: orderDate,
                                    fontSize: 18,
                                    bold: true,
                                    alignment: "right",
                                    margin: [0, 0, 0, 8],
                                    border: [false, false, false, false]
                                }
                            ]
                        ]
                    }
                },
                {
                    table: {
                        headerRows: 1,
                        widths: [
                            { width: "*" },
                            { width: "*" },
                            // { width: '*' },
                            { width: "*" },
                            { width: "*" },
                            { width: "*" }
                        ],
                        body: pdfInvoiceTableData,
                        dontBreakRows: true,
                        margin: [0, 0, 0, 30]
                    }
                },
                {
                    table: {
                        widths: ["*", "*", "*"],
                        body: [
                            [
                                {
                                    text: " ",
                                    border: [false, false, false, true],
                                    borderColor: ["", "", "", "#000"]
                                },
                                {
                                    text: " ",
                                    border: [false, false, false, true],
                                    borderColor: ["", "", "", "#000"]
                                },
                                {
                                    text: " ",
                                    border: [false, false, false, true],
                                    borderColor: ["", "", "", "#000"]
                                }
                            ],
                            [
                                {
                                    text: " ",
                                    border: [false, false, false, false],
                                    borderColor: ["", "", "", ""]
                                },
                                {
                                    text: " ",
                                    border: [false, false, false, false],
                                    borderColor: ["", "", "", ""]
                                },
                                {
                                    text: " ",
                                    border: [false, false, false, false],
                                    borderColor: ["", "", "", ""]
                                }
                            ],
                            [
                                {
                                    stack: [
                                        {
                                            text: "계좌정보",
                                            fontSize: 18,
                                            bold: true,
                                            margin: [0, 0, 0, 8]
                                        },
                                        { text: "은행명: 신한은행", fontSize: 10 },
                                        { text: "예금주: (주)쉐어그라운드", fontSize: 10 }
                                    ],
                                    border: [false, false, false, false]
                                },
                                {
                                    stack: [
                                        {
                                            text: "1",
                                            fontSize: 18,
                                            color: "white",
                                            margin: [0, 0, 0, 8]
                                        },
                                        { text: "계좌번호: 140-012-636626", fontSize: 10 },
                                        { text: "대표자: 이연", fontSize: 10 }
                                    ],
                                    border: [false, false, false, false]
                                },
                                {
                                    stack: [
                                        {
                                            text: "합계금액",
                                            fontSize: 18,
                                            bold: true,
                                            margin: [0, 0, 0, 8],
                                            alignment: "right"
                                        },
                                        {
                                            text: this.formatNumber(totalAll),
                                            fontSize: 18,
                                            bold: true,
                                            alignment: "right"
                                        }
                                    ],
                                    border: [false, false, false, false]
                                }
                            ]
                        ],
                        dontBreakRows: true
                    }
                }
            ],
            defaultStyle: {
                font: "NanumSquare"
            }
        };

        pdfMake.createPdf(def, null, pdf.fonts, pdf.vfs).open();
    }

}