import styled from "styled-components";
import { FiSend } from "react-icons/fi";
// import { useContext, useEffect } from "react";

// import { getPostComments } from "../service/api.service";
// import UserContext from "../contexts/UserContext";

export default function Comments({ postId }) {
    // const { userData } = useContext(UserContext);

    // useEffect(() => {
    //     getComments();
    // },[]) // eslint-disable-line react-hooks/exhaustive-deps

    // function getComments() {
    //     const token = userData.token;

    //     req.then(res => {
    //         console.log(res.data)
    //     })
    //     req.catch(() => {
    //         alert("Comentários não carregados. Por favor, tente novamente mais tarde.");
    //     })
    // }

    return (
        <Box>
            <Content>
                <div>
                    <Image></Image>
                    <TextFields>
                        <div>
                            <User>Thiago</User>
                            <Follow>• following</Follow>
                        </div>
                        <Comment>asfasfasfasfasfasf</Comment>
                    </TextFields>
                </div>
                <Separator /> 
            </Content>
            <WriteComment>
                <Image></Image>
                <form>
                    <Input placeholder="write a comment..." />
                    <Button />
                </form>
            </WriteComment>       
        </Box>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Box = styled.div`
    position: relative;
    z-index: 1;
    width: 611px;
    margin-top: -68px;
    background: #1E1E1E;
    padding: 88px 25px 0 25px;
    display: flex;
    flex-direction: column;

    div{
        display: flex;
    }
`;

const Image = styled.div`
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background-color: #4e4e4e;
    margin-right: 18px;
`;

const TextFields = styled.div`
    display: flex;
    flex-direction: column;
`;

const User = styled.span`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #FFF;
`;

const Follow = styled.span`
    font-size: 14px;
    line-height: 17px;
    color: #565656;
    margin-left: 4px;
`;

const Comment = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #ACACAC;
    margin-top: 3px;
`;

const Separator = styled.div`
    width: 560px;
    margin: 16px 0;
    border: 1px solid #353535;
`;

const WriteComment = styled.div`
    margin-bottom: 25px;
`;

const Input = styled.input`
    width: 505px;
    height: 39px;
    background: #252525;
    border-radius: 8px;
    border: none;
    padding-left: 15px;
    font-family: "Lato", sans-serif;
    color: #FFF;

    ::placeholder{
        font-style: italic;
        font-size: 14px;
        line-height: 17px; 
    }
`;

const Button = styled(FiSend)`
    color: #FFF;
    font-size: 20px;
    position: absolute;
    right: 40px;
    bottom: 34px;
    cursor: pointer;
`;