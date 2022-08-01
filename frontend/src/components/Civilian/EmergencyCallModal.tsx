import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/consts";

interface Props {
    display: boolean,
    setDisplayStatusHook: Dispatch<SetStateAction<boolean>> // hell
}

const EmergencyCallModal: React.FC<Props> = ({ display, setDisplayStatusHook }) => {
    const modalRef = useRef(null);

    const closeModal = (e: MouseEvent<HTMLElement>) => {
        if (modalRef.current === e.target) {
            setDisplayStatusHook(prev => !prev);
        }
    }

    return(
        <>
        { display ? (
        <Background ref={modalRef} onClick={closeModal}>
            <ModalWrapper>
                <ModalHeading>Call 911</ModalHeading>
                <h4>Emergency Service Requested</h4>
                <ModalDropdown>
                    <optgroup label="Service">
                        <ModalOption value="police">Police</ModalOption>
                        <ModalOption value="fire">Fire/EMS</ModalOption>
                    </optgroup>
                </ModalDropdown>
                <h4>Description of Emergency</h4>
                <ModalField placeholder="I was shot and need medical attention"/>
                <h4>Location</h4>
                <ModalField placeholder="By the park near..."/>
                <ModalButton onClick={() => setDisplayStatusHook(prev => !prev)}>Submit Call</ModalButton>
            </ModalWrapper>
        </Background>
        ): null }
        </>
    )
}

const Background = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(10px);
    z-index: 5;
`

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    height: 55%;
    width: 20%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 5px;
    background-color: ${COLORS.FOREGROUND};
    color: ${COLORS.TEXT};
`

const ModalHeading = styled.h1`
    margin-top: 20px;
    margin-bottom: 0px;
`

const ModalDropdown = styled.select`
    height: 30px;
    width: 50%;
    font-size: 14px;
`

const ModalOption = styled.option`
    
`

const ModalField = styled.textarea`
    height: 70px;
    width: 50%;
    resize: none;
`

const ModalButton = styled.button`
    height: 7%;
    width: 50%;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    background-color: ${COLORS.BUTTON_RED};
    color: ${COLORS.TEXT};
    font-size: 14px;
    font-weight: bold;
    transition: background-color 100ms;
    :hover {
        background-color: ${COLORS.BUTTON_RED_HOVER};
    }
`

export default EmergencyCallModal;