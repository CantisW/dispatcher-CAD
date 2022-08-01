import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/consts";

interface Props {
    display: boolean,
    setDisplayStatusHook: Dispatch<SetStateAction<boolean>> // hell
}

const CivilianModal: React.FC<Props> = ({ display, setDisplayStatusHook }) => {
    const modalRef = useRef(null);

    const closeModal = (e: MouseEvent<HTMLElement>) => {
        if (modalRef.current === e.target) {
            setDisplayStatusHook(prev => !prev);
        }
    }

    return (
        <>
            {display ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalHeadingWrapper>
                            <h1>Create New Civilian</h1>
                        </ModalHeadingWrapper>
                        <ModalFormWrapper>
                            <ModalField type="text" placeholder="First Name" />
                            <ModalField type="text" placeholder="Middle Name" />
                            <ModalField type="text" placeholder="Last Name" />
                            <ModalField type="text" placeholder="Date of Birth" />
                            <ModalField type="text" width="70px" placeholder="Age" readOnly />
                            <ModalDropdown>
                                <optgroup label="Sex">
                                    <ModalOption value="" selected disabled hidden>Sex</ModalOption>
                                    <ModalOption value="Male">Male</ModalOption>
                                    <ModalOption value="Female">Female</ModalOption>
                                </optgroup>
                            </ModalDropdown>
                            <ModalDropdown>
                                <optgroup label="Race">
                                    <ModalOption value="" selected disabled hidden>Race</ModalOption>
                                    <ModalOption value="White">White</ModalOption>
                                    <ModalOption value="Black or African American">Black or African American</ModalOption>
                                    <ModalOption value="Hispanic">Hispanic</ModalOption>
                                    <ModalOption value="Asian">Asian</ModalOption>
                                    <ModalOption value="Native American or Alaska Native">Native American or Alaska Native</ModalOption>
                                    <ModalOption value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</ModalOption>
                                    <ModalOption value="Other">Other</ModalOption>
                                </optgroup>
                            </ModalDropdown>
                            <ModalField type="number" min={0} placeholder="Height (in inches)" />
                            <ModalField type="number" min={0} placeholder="Weight (in lbs)" />
                            <ModalField type="text" width="220px" placeholder="Address" />
                            <ModalField type="text" width="220px" placeholder="Occupation" />
                            <ModalDropdown>
                                <optgroup label="Vehicle License Status">
                                    <ModalOption value="" selected disabled hidden>Vehicle License Status</ModalOption>
                                    <ModalOption value="Valid">Valid</ModalOption>
                                    <ModalOption value="Revoked">Revoked</ModalOption>
                                    <ModalOption value="Suspended">Suspended</ModalOption>
                                    <ModalOption value="Expired">Expired</ModalOption>
                                    <ModalOption value="None">None</ModalOption>
                                </optgroup>
                            </ModalDropdown>
                            <ModalDropdown>
                                <optgroup label="Gun License Status">
                                    <ModalOption value="" selected disabled hidden>Gun License Status</ModalOption>
                                    <ModalOption value="Valid">Valid</ModalOption>
                                    <ModalOption value="Revoked">Revoked</ModalOption>
                                    <ModalOption value="Suspended">Suspended</ModalOption>
                                    <ModalOption value="Expired">Expired</ModalOption>
                                    <ModalOption value="None">None</ModalOption>
                                </optgroup>
                            </ModalDropdown>
                        </ModalFormWrapper>
                        <ModalButton onClick={() => setDisplayStatusHook(prev => !prev)}>Create Civilian</ModalButton>
                    </ModalWrapper>
                </Background>
            ) : null}
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
    position: absolute;
    height: 45%;
    width: 40%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 5px;
    background-color: ${COLORS.FOREGROUND};
    color: ${COLORS.TEXT};
`

const ModalHeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`

const ModalFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 60%;
    width: 100%;
`

const ModalDropdown = styled.select`
    height: 25px;
    width: 160px;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 14px;
`

const ModalOption = styled.option`
    
`

const ModalField = styled.input<{ width?: string | undefined }>`
    height: 25px;
    width: ${props => props.width !== undefined ? props.width : "150px"};
    margin-left: 20px;
    margin-top: 10px;
    resize: none;
`

const ModalButton = styled.button`
    position: absolute;
    height: 10%;
    width: 30%;
    bottom: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    align-self: center;
    justify-self: flex-end;
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

export default CivilianModal;