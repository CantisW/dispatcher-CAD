import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/consts";

interface Props {
    display: boolean,
    setDisplayStatusHook: Dispatch<SetStateAction<boolean>> // hell
}

const VehicleModal: React.FC<Props> = ({ display, setDisplayStatusHook }) => {
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
                            <h1>California DMV Vehicle Registration</h1>
                        </ModalHeadingWrapper>
                        <ModalFormWrapper>
                            <ModalField type="text" placeholder="Make" />
                            <ModalField type="text" placeholder="Model" />
                            <ModalField type="text" placeholder="Color" />
                            <ModalField type="text" placeholder="License Plate" />
                            <ModalDropdown>
                                <optgroup label="Registration Status">
                                    <ModalOption value="" selected disabled hidden>Registration Status</ModalOption>
                                    <ModalOption value="Registered">Registered</ModalOption>
                                    <ModalOption value="Not Registered">Not Registered</ModalOption>
                                    <ModalOption value="Expired Registered">Expired Registration</ModalOption>
                                </optgroup>
                            </ModalDropdown>
                            <ModalDropdown>
                                <optgroup label="Insurance Status">
                                    <ModalOption value="" selected disabled hidden>Insurance Status</ModalOption>
                                    <ModalOption value="Insured">Insured</ModalOption>
                                    <ModalOption value="Not Insured">Not Insured</ModalOption>
                                    <ModalOption value="Expired Insurance">Expired Insurance</ModalOption>
                                </optgroup>
                            </ModalDropdown>
                            <ModalDropdown>
                                <optgroup label="Stolen">
                                    <ModalOption value="" selected disabled hidden>Stolen</ModalOption>
                                    <ModalOption value="Yes">Yes</ModalOption>
                                    <ModalOption value="No">No</ModalOption>
                                </optgroup>
                            </ModalDropdown>
                            <ModalDropdown>
                                <optgroup label="Registered Owner">
                                    <ModalOption value="" selected disabled hidden>Registered Owner</ModalOption>
                                </optgroup>
                            </ModalDropdown>
                        </ModalFormWrapper>
                        <ModalButton onClick={() => setDisplayStatusHook(prev => !prev)}>Register Vehicle</ModalButton>
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
    width: 30%;
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

export default VehicleModal;