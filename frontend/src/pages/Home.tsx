import { useEffect } from "react";
import Header from "../components/common/Header";
import HeaderText from "../components/common/HeaderText";
import HeaderLargeText from "../components/common/HeaderLargeText";
import PanelButton from "../components/common/PanelButton";
import SidePanel from "../components/common/SidePanel";
import DepartmentHeader from "../components/Home/DepartmentHeader";
import DepartmentListWrapper from "../components/Home/DepartmentListWrapper";
import DepartmentOption from "../components/Home/DepartmentOption";
import MainWrapper from "../components/common/MainWrapper";
import { COLORS } from "../utils/consts";
import TableData from "../components/common/TableData";
import TableRow from "../components/common/TableRow";
import TableWrapper from "../components/Home/TableWrapper";
import TableHeader from "../components/common/TableHeader";
import Table from "../components/common/Table";


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
                <HeaderText>Welcome: PLACEHOLDER</HeaderText>
                <HeaderLargeText>State of California Communications</HeaderLargeText>
                <HeaderText>Date: {getDate()}</HeaderText>
            </Header>
            <SidePanel>
                <h4>Options:</h4>
                <PanelButton color={COLORS.BUTTON_RED} hoverColor={COLORS.BUTTON_RED_HOVER} href="/login">Logout</PanelButton>
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
                    <DepartmentOption href="/civilian">Civilian Operations</DepartmentOption>
                    <DepartmentOption href="/police">Los Angeles Police Department</DepartmentOption>
                    <DepartmentOption href="/police">Special Weapons and Tactics</DepartmentOption>
                    <DepartmentOption href="/police">California Highway Patrol</DepartmentOption>
                    <DepartmentOption href="/fire">Los Angeles Fire Department</DepartmentOption>
                    <DepartmentOption href="/dispatch">Los Angeles Communications Department</DepartmentOption>
                </DepartmentListWrapper>
                <h2>Announcements</h2>
                <TableWrapper>
                    <Table>
                        <thead>
                            <TableRow>
                                <TableHeader>Message</TableHeader>
                                <TableHeader>Author</TableHeader>
                                <TableHeader>Date</TableHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            <TableRow>
                                <TableData>happy 2022!</TableData>
                                <TableData>CubedKiwi</TableData>
                                <TableData>07/11/2094</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Lorem Ipsum Dolor Sit Amet</TableData>
                                <TableData>Gibberish Latin</TableData>
                                <TableData>adsohfejs</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>2b2t is the oldest anarchy server in Minecraft. There are no rules. Hack, cheat, steal, lie, nothing is off limits. Wars, battles, builds, and betrayals have all happened here. As with anything related to 2b2t, viewer discretion is advised. Welcome to the world's worst server.</TableData>
                                <TableData>FitMC</TableData>
                                <TableData>02/94/2024</TableData>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableWrapper>
            </MainWrapper>
        </>
    )
}

export default Home;