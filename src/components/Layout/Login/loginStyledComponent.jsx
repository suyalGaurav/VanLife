import styled from "styled-components";

const LoginStyle = styled.section`
    min-height: calc(100vh - 111px - 75px);
    width: 100vw;
    background-color: #FFF;
    padding: 26px;
    
        h1 {
            color: #161616;
            text-align: center;
            font-family: Inter;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px; 
            padding: 50px
        }

        .auth-message, .error-message {
            color: #d44d4d;
            text-align: center;
            margin-bottom: 10px;
        }

        form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .form-input {
            display: flex;
            position: relative;
            width: 100%;
            max-width: 494px;
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        }

        input::placeholder {
            font-size: 17px;
        }

        .form-input input {
            border: 1px solid #D1D5DB;
            height: 40px;
            width: 100%;
            text-indent: 10px;
            background: #FFF;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
        }

        #email {
            border-radius: 6px 6px 0px 0px;
            border-bottom: none;
        }

        #password {
            border-radius: 0px 0px 6px 6px;
        }

        form button {
            width: 100%;
            max-width: 494px;
            padding: 17px;
            border: none;
            color: var(--white, #FFF);
            font-weight: 700;
            line-height: 20px; 
            border-radius: 6px;
            background: #FF8C38;
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
            margin: 22px 0px 47px;
        }

        .new-account {
            display: flex;
        }
        
        .new-account > span {
            color: #161616;
            text-align: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; 
        }

        .new-account > a {
            color: #FF8C38;
            font-weight: 700;
            line-height: 24px;
        }

        .new-account {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1px;
        }
        
    `

export default LoginStyle