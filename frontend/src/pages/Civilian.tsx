import { useEffect, useState } from "react";
import CivilianModal from "../components/Civilian/CivilianModal";
import CivilianTableWrapper from "../components/Civilian/CivilianTableWrapper";
import EmergencyCallModal from "../components/Civilian/EmergencyCallModal";
import TableButton from "../components/Civilian/TableButton";
import VehicleModal from "../components/Civilian/VehicleModal";
import VehicleTableWrapper from "../components/Civilian/VehicleTableWrapper";
import Header from "../components/common/Header";
import HeaderLargeText from "../components/common/HeaderLargeText";
import HeaderText from "../components/common/HeaderText";
import MainWrapper from "../components/common/MainWrapper";
import PanelButton from "../components/common/PanelButton";
import SidePanel from "../components/common/SidePanel";
import Table from "../components/common/Table";
import TableData from "../components/common/TableData";
import TableHeader from "../components/common/TableHeader";
import TableRow from "../components/common/TableRow";
import { COLORS } from "../utils/consts";


const Civilian: React.FC = () => {
    const [date, setDate] = useState<string>();
    const [showEmergencyCallModal, setShowEmergencyCallModal] = useState(false);
    const [showCivilianModal, setShowCivilianModal] = useState(false);
    const [showVehicleModal, setShowVehicleModal] = useState(false);

    useEffect(() => {
        getDate(); // initialize date
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            getDate();
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    })

    const getDate = () => {
        const date = new Date();
        let hours: string | number = date.getUTCHours();
        let minutes: string | number = date.getUTCMinutes();
        let seconds: string | number = date.getUTCSeconds();
        if (hours < 10) {
            hours = hours.toString();
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = minutes.toString();
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = seconds.toString();
            seconds = "0" + seconds;
        }
        const time = `${hours}:${minutes}:${seconds}`
        setDate(time);
    }

    const openEmergencyCallModal = () => {
        setShowEmergencyCallModal(prev => !prev);
    }

    const openCivilianModal = () => {
        setShowCivilianModal(prev => !prev);
    }

    const openVehicleModal = () => {
        setShowVehicleModal(prev => !prev);
    }

    return (
        <>
            <EmergencyCallModal display={showEmergencyCallModal} setDisplayStatusHook={setShowEmergencyCallModal} />
            <CivilianModal display={showCivilianModal} setDisplayStatusHook={setShowCivilianModal} />
            <VehicleModal display={showVehicleModal} setDisplayStatusHook={setShowVehicleModal} />
            <Header>
                <HeaderText>Welcome: PLACEHOLDER</HeaderText>
                <HeaderLargeText>State of California Civilian Operations</HeaderLargeText>
                <HeaderText>Zulu Time: {date}</HeaderText>
            </Header>
            <SidePanel>
                <h4>Options:</h4>
                <PanelButton color={COLORS.BUTTON_RED} hoverColor={COLORS.BUTTON_RED_HOVER} href="/home">Home</PanelButton>
                <PanelButton onClick={openCivilianModal}>New Civilian</PanelButton>
                <PanelButton onClick={openVehicleModal}>DMV</PanelButton>
                <PanelButton onClick={openEmergencyCallModal}>Call 911</PanelButton>
            </SidePanel>
            <MainWrapper>
                <h2>Your Civilians</h2>
                <CivilianTableWrapper>
                    <Table>
                        <thead>
                            <TableRow>
                                <TableHeader>Full Name</TableHeader>
                                <TableHeader>DoB</TableHeader>
                                <TableHeader>Age</TableHeader>
                                <TableHeader>Sex</TableHeader>
                                <TableHeader>Race</TableHeader>
                                <TableHeader>Height</TableHeader>
                                <TableHeader>Weight</TableHeader>
                                <TableHeader>Address</TableHeader>
                                <TableHeader>Occupation</TableHeader>
                                <TableHeader>Vehicle License</TableHeader>
                                <TableHeader>Gun License</TableHeader>
                                <TableHeader></TableHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            <TableRow>
                                <TableData>Argentinian Kiwi</TableData>
                                <TableData>06/07/2004</TableData>
                                <TableData>42</TableData>
                                <TableData>Male</TableData>
                                <TableData>Black</TableData>
                                <TableData>3'-4''</TableData>
                                <TableData>134 lbs</TableData>
                                <TableData>1234 Argentina Ave</TableData>
                                <TableData>Twitter Troll</TableData>
                                <TableData>Valid</TableData>
                                <TableData>N/A</TableData>
                                <TableData>
                                    <TableButton>Edit Character</TableButton>
                                    <TableButton>Criminal Record</TableButton>
                                </TableData>
                            </TableRow>
                        </tbody>
                    </Table>
                </CivilianTableWrapper>
                <h2>Your Vehicles</h2>
                <VehicleTableWrapper>
                    <Table>
                        <thead>
                            <TableRow>
                                <TableHeader>Make</TableHeader>
                                <TableHeader>Model</TableHeader>
                                <TableHeader>Color</TableHeader>
                                <TableHeader>License Plate</TableHeader>
                                <TableHeader>Registred?</TableHeader>
                                <TableHeader>Insured?</TableHeader>
                                <TableHeader>Stolen?</TableHeader>
                                <TableHeader>Registered Owner</TableHeader>
                                <TableHeader>Options</TableHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            <TableRow>
                                <TableData>Toyota</TableData>
                                <TableData>Corolla</TableData>
                                <TableData>Red</TableData>
                                <TableData>T0Y0T4</TableData>
                                <TableData>Yes</TableData>
                                <TableData>Yes</TableData>
                                <TableData>No</TableData>
                                <TableData>Argentinian Kiwi</TableData>
                                <TableData>
                                    <TableButton>Edit Vehicle</TableButton>
                                </TableData>
                            </TableRow>
                        </tbody>
                    </Table>
                </VehicleTableWrapper>
            </MainWrapper>
        </>
    )
}

export default Civilian;