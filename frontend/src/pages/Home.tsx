import { useEffect } from "react";
import Header from "../components/common/Header";
import PanelButton from "../components/common/PanelButton";
import SidePanel from "../components/common/SidePanel";
import DepartmentHeader from "../components/Home/DepartmentHeader";
import DepartmentListWrapper from "../components/Home/DepartmentListWrapper";
import DepartmentOption from "../components/Home/DepartmentOption";
import MainWrapper from "../components/Home/MainWrapper";
import { COLORS } from "../utils/consts";


const Home: React.FC = () => {
    const getDate = () => {
        const date = new Date();
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    const getUsername = () => {
        // TODO: get actual username
    }

    return (
        <>
            <Header>
                <h3>Welcome: PLACEHOLDER</h3>
                <h2>Liberty County Department of Communications</h2>
                <h3>Date: {getDate()}</h3>
            </Header>
            <SidePanel>
                <h4>Options:</h4>
                <PanelButton color={COLORS.BUTTON_RED} hoverColor={COLORS.BUTTON_RED_HOVER}>Logout</PanelButton>
                <PanelButton>My Account</PanelButton>
                <PanelButton>Penal Code</PanelButton>
                <PanelButton>Report LEO</PanelButton>
                <PanelButton>Dept. Transfer</PanelButton>
                <PanelButton>Admin Panel</PanelButton>
            </SidePanel>
            <MainWrapper>
                <DepartmentListWrapper>
                    <DepartmentHeader>
                        <h3>Departments</h3>
                    </DepartmentHeader>
                    <DepartmentOption>Civilian</DepartmentOption>
                    <DepartmentOption>Los Angeles Police Department</DepartmentOption>
                    <DepartmentOption>California Highway Patrol</DepartmentOption>
                    <DepartmentOption>Los Angeles Fire Department</DepartmentOption>
                    <DepartmentOption>Los Angeles Communications Department</DepartmentOption>
                </DepartmentListWrapper>
            </MainWrapper>
        </>
    )
}

export default Home;