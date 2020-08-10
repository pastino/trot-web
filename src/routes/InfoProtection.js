import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const DivideLineLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  height: 47px;
  border-bottom: 2px solid #eeeeee;
  background-color: #ab82ff;
`;

const DivideLineText = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  color: white;
  font-size: 20px;
`;

const InfoProtection = () => (
  <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        backgroundColor: "black",
        color: "white",
        height: 70,
      }}
    >
      트로트판
    </div>
    <Wrapper>
      <DivideLineLine>
        <div
          style={{
            display: "flex",
            //   backgroundColor: "blue",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DivideLineText>개인정보처리방침</DivideLineText>
        </div>
        {/* <div
          style={{
            display: "flex",
            width: "100%",
            //   backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DivideLineText>이용약관</DivideLineText>
        </div> */}
      </DivideLineLine>
    </Wrapper>
    <div style={{ margin: 10 }}>
      <div style={{ marginBottom: 30, marginTop: 20 }}>
        해당 어플("트로트판")에서는 회원가입 없이 즐기실 수 있습니다.
      </div>
      <div>
        따라서 개인정보를 저장하지 않으며, 개인정보를 요구하지 않습니다.
      </div>
    </div>
  </>
);
export default InfoProtection;
