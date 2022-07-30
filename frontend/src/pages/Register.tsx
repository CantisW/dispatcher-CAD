import { useEffect } from "react";
import Link from "../components/common/Link";
import FormButton from "../components/FormComponents/FormButton";
import FormHeaderText from "../components/FormComponents/FormHeaderText";
import FormInput from "../components/FormComponents/FormInput";
import FormInputText from "../components/FormComponents/FormInputText";
import FormInputWrapper from "../components/FormComponents/FormInputWrapper";
import FormNavWrapper from "../components/FormComponents/FormNavWrapper";
import { COLORS } from "../utils/consts";

const Register: React.FC = () => {

    useEffect(() => {
        document.body.style.backgroundColor = COLORS.BACKGROUND;
    })

    return(
        <FormNavWrapper>
            <FormHeaderText>Sign Up</FormHeaderText>
            <FormInputWrapper>
                <FormInputText>Email</FormInputText>
                <FormInput placeholder="Enter your email" />
                <FormInputText>Username</FormInputText>
                <FormInput placeholder="Enter your email" />
                <FormInputText>Password</FormInputText>
                <FormInput placeholder="Enter your password" />
                <FormInputText>Confirm Password</FormInputText>
                <FormInput placeholder="Re-enter your password" />
                <FormButton>Submit</FormButton>
            </FormInputWrapper>
            <p>Already have an account? <Link color={COLORS.HEADER_TEXT} hoverColor={COLORS.LINK_HOVER} href="/login">Log in</Link></p>
        </FormNavWrapper>
    )
}

export default Register;