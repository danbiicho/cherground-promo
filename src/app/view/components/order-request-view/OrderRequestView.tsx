import React, { useReducer, useCallback, useState } from "react";
import styled from "styled-components";
import reducer from "app/view/reducers/orderReducers";
import InputSelections from "app/view/widgets/InputSelections";
import MenuBox from "app/view/widgets/MenuBox";
import ActionButton from "app/view/widgets/ActionButton";
import ClipImgPng from "cg-promotion-attach@2x.png";
import { RouteComponentProps, withRouter } from "react-router-dom";

export const OrderDispatch = React.createContext(null);

const OrderRequestView: React.FunctionComponent<RouteComponentProps> = (
  props
) => {
  const { brand, style } = props.history.location.state;
  const [filteredItems, setfilteredItems] = useState<Object[]>([
    { title: "아우터", desc: "description" },
    { title: "상의", desc: "description" },
    { title: "하의", desc: "description" },
    { title: "악세사리", desc: "description" },
    { title: "기타", desc: "description" },
  ]);
  const initialState = {
    isConfirmed: false,
    isSelectBoxOpened: false,
    userInput: {
      color: "",
      quantity: "",
      brand: brand,
      style: style,
    },
    imgPreview: [],
    errorMsg: "Error!",
    confirmedSelections: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isConfirmed,
    confirmedSelections,
    isSelectBoxOpened,
    errorMsg,
    imgPreview,
  } = state;
  const { color, quantity } = state.userInput;

  const sendInputVal = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch({
      type: "ADD_USER_SELECTION",
      name,
      value,
    });
  }, []);

  const addSelectionHandler = useCallback(() => {
    dispatch({
      type: "CONFIRM_USER_SELECTION",
    });
  }, [color, quantity]);

  const cancelHandler = useCallback(() => {
    console.log("canceled");
  }, []);

  const arrowChangeHandler = useCallback(() => {
    dispatch({
      type: "PAINT_SELECTION",
      isSelectBoxOpened,
    });
  }, [isSelectBoxOpened]);

  const imgUploader = (file: File) => {
    const reader = new FileReader();

    let url = "";

    reader.addEventListener("load", (e) => {
      url = e.target.result;
      dispatch({
        type: "SAVE_IMG_PREVIEW",
        PreviewFile: {
          imgThumb: url,
          fileName: `${file[0].name}`,
        },
      });
    });
    reader.readAsDataURL(file[0]);
  };

  return (
    <>
      <Overlay>
        <OrderRequestModalLayout>
          <TitleBox>
            <span style={{ whiteSpace: "nowrap" }}>주문 의뢰서 접수</span>
            <ProgressBox>
              <ProgressBar stage={2} />
            </ProgressBox>
          </TitleBox>
          <SelectionsCont>
            <CategoryInputBox>
              <span style={{ marginBottom: "12px", display: "inline-block" }}>
                카테고리*
              </span>
              <MenuBox
                arrowChangeHandler={arrowChangeHandler}
                isSelectBoxOpened={isSelectBoxOpened}
                filteredItems={filteredItems}
              />
            </CategoryInputBox>
            <DesignSelectWrapper>
              <OrderDispatch.Provider value={dispatch}>
                <DesginInputWrapper>
                  <ColorInputBox>
                    <span style={{ position: "absolute" }}>컬러*</span>
                    <InputSelections
                      placeholderTxt={"컬러 입력"}
                      name={"color"}
                      onChangeHandler={sendInputVal}
                      isConfirmed={isConfirmed}
                      width={"100%"}
                      errorMsg={errorMsg}
                    />
                  </ColorInputBox>
                  <QuantityInputBox>
                    <span style={{ position: "absolute" }}>희망수량*</span>
                    <InputSelections
                      placeholderTxt={"희망 수량 입력"}
                      name={"quantity"}
                      onChangeHandler={sendInputVal}
                      isConfirmed={isConfirmed}
                      width={"100%"}
                      errorMsg={errorMsg}
                    />
                  </QuantityInputBox>
                </DesginInputWrapper>
              </OrderDispatch.Provider>
              <SelectedTab confirmedSelections={confirmedSelections}>
                {confirmedSelections.map((item: any) => {
                  return (
                    <SelectedLabel>
                      컬러:{item.color}, 수량:{item.quantity}
                    </SelectedLabel>
                  );
                })}
              </SelectedTab>
              <Selections onClick={addSelectionHandler}>컬러 추가</Selections>
              <Divider />
              <FileUploadCont>
                <TextBoxInput>
                  <span>비고</span>
                  <TextBox type="textarea" placeholder="비고 입력" />
                </TextBoxInput>
                <AttachingImg>
                  <span>첨부이미지</span>
                  <AttachingImgBox>
                    <ImgCont>
                      <ClipImg src={ClipImgPng} />
                      <GuideMsg>Drop files here or</GuideMsg>
                      <Label for="upload">Browse...</Label>
                    </ImgCont>
                    <Img
                      type="file"
                      id="upload"
                      onChange={(e) => imgUploader(e.target.files)}
                    />
                    <ImgPreviewList>
                      {imgPreview
                        .map((item, idx) => {
                          return (
                            <ImgPreview lastThumb={8}>
                              <ImgThumb img={item.imgThumb} />
                              <p
                                style={{
                                  fontSize: "12px",
                                  paddingLeft: "3px",
                                  width: "max-content",
                                }}
                              >
                                {item.fileName}
                              </p>
                            </ImgPreview>
                          );
                        })
                        .filter((item, idx) => idx <= 2)}
                    </ImgPreviewList>
                  </AttachingImgBox>
                </AttachingImg>
              </FileUploadCont>
              <Divider />
            </DesignSelectWrapper>
          </SelectionsCont>
          <BtnCont>
            <ActionButton
              buttonName={"SECONDARY"}
              isEnable={false}
              buttonText={"취소"}
              onClick={cancelHandler}
            />
            <ActionButton
              buttonName={"PRIMARY"}
              isEnable={false}
              buttonText={"접수"}
              onClick={cancelHandler}
              isConfirmed={confirmedSelections.length}
            />
          </BtnCont>
        </OrderRequestModalLayout>
      </Overlay>
    </>
  );
};

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderRequestModalLayout = styled.div`
  margin: 64px 0;
  width: 700px;
  height: 825px;
  border-radius: 2px;
  background-color: #fff;
  z-index: 555;
  padding: 0 40px;
  position: relative;
`;

const TitleBox = styled.div`
  font-family: NanumSquare;
  height: 99px;
  font-weight: 700;
  font-size: 28px;
  color: #1e2640;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 40px;
`;

const ProgressBox = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 28px;
  z-index: 10;
  background-color: #dfdfdf;
  position: relative;
`;

const ProgressBar = styled.span<{ stage: number }>`
  position: absolute;
  width: ${(props) => (props.stage === 1 ? "50%" : "100%")};
  height: 2px;
  z-index: 22;
  background-color: #50b12f;
`;

const SelectionsCont = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
`;

const CategoryInputBox = styled.div`
  margin-bottom: 20px;
  z-index: 777;
`;

const DesignSelectWrapper = styled.div`
  position: absolute;
  top: 96px;
  z-index: 444;
  width: 100%;
`;

const DesginInputWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const ColorInputBox = styled.div`
  position: relative;
  width: 50%;
  height: auto;
`;

const QuantityInputBox = styled.div`
  position: relative;
  margin-left: 8px;
  display: flex;
  width: 50%;
  height: auto;
`;

const SelectedTab = styled.div<{ confirmedSelections: Array<Object> }>`
  height: ${(props) => (props.confirmedSelections.length >= 1 ? "20px" : "")};
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 2px;
`;

const SelectedLabel = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 2px;
  font-size: 14px;
  border: solid 1px #dfdfdf;
  text-align: center;
`;

const Selections = styled.div`
  cursor: pointer;
  width: 100%;
  height: auto;
  border-radius: 2px;
  border: solid 1px #dfdfdf;
  padding: 12px 49.6px;
  text-align: center;
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  margin: 30px 0;
`;
const FileUploadCont = styled.div`
  //width: inherit;
  display: flex;
  justify-content: flex-start;
`;

const TextBoxInput = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.textarea`
  width: auto;
  height: 254px;
  border-radius: 2px;
  margin-top: 12px;
  border: solid 1px #dfdfdf;
  padding: 16px;
  display: flex;
  outline: none;
  overflow: hidden;
  resize: none;
  &::placeholder {
    font-family: NanumSquare;
    font-size: 16px;
    color: #b9bbc1;
  }
`;

const AttachingImg = styled.div`
  flex: 2;
  margin-left: 24px;
`;

const AttachingImgBox = styled.div`
  height: 254px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 100px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #dfdfdf;
  padding: 8px;
  font-size: 14px;
  color: #535454;
  text-align: center;
  margin-bottom: 17px;
`;

const Img = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const ImgCont = styled.div`
  border: dashed 3px #dfdfdf;
  width: auto;
  height: 120px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgPreviewList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
`;

const ImgPreview = styled.div<{ lastThumb: number }>`
  height: 32px;
  margin-bottom: ${(props) => `${props.lastThumb}px`};
  display: flex;
  align-items: center;
`;

const ImgThumb = styled.div<{ img: string }>`
  width: 32px;
  height: 32px;
  background-image: ${(props) => `url(${props.img})`};
  //background-color: #68768d;
  background-position: center;
  object-fit: cover;
  background-size: contain;
`;

const ClipImg = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  margin-top: 18px;
`;

const GuideMsg = styled.p`
  font-size: 12px;
  text-align: center;
  color: #68768d;
`;
const BtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  //bottom: 0;
  bottom: -10px;
  right: 0;
  padding-right: 40px;
`;

export default withRouter(OrderRequestView);
