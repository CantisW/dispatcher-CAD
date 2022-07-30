import { useEffect } from "react";
import Link from "../components/common/Link";
import FormButton from "../components/FormComponents/FormButton";
import FormHeaderText from "../components/FormComponents/FormHeaderText";
import FormInput from "../components/FormComponents/FormInput";
import FormInputText from "../components/FormComponents/FormInputText";
import FormInputWrapper from "../components/FormComponents/FormInputWrapper";
import FormNavWrapper from "../components/FormComponents/FormNavWrapper";
import { COLORS } from "../utils/consts";

const Login: React.FC = () => {
    
    // This is a BAD practice! Too bad!

    useEffect(() => {
        document.body.style.backgroundColor = COLORS.BACKGROUND;
    })

    return(
        <FormNavWrapper>
            <FormHeaderText>Login</FormHeaderText>
            <FormInputWrapper>
                <FormInputText>Email</FormInputText>
                <FormInput placeholder="Enter your email" />
                <FormInputText>Password</FormInputText>
                <FormInput placeholder="Enter your password" />
                <FormButton>Submit</FormButton>
            </FormInputWrapper>
            <p>Don't have an account? <Link color={COLORS.HEADER_TEXT} hoverColor={COLORS.LINK_HOVER} href="/register">Sign up</Link></p>
        </FormNavWrapper>
    )
}

export default Login;