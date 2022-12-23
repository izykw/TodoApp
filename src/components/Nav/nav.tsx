import React from "react";
import styled from "styled-components";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {BsCalendarCheck, BsThreeDots} from 'react-icons/bs';
import {Colors} from "../../services/enums";

const NavComponent = styled.div`
	position: absolute;
	bottom: 0;
	
	width: 100%;
`

const NavButton = styled.button`
  width: 33.333333%;
  height: 70px;

  border: solid 1px rgba(0, 0, 0, 0.3);
	border-bottom: 0;
  background-color: transparent;
  cursor: pointer;
  opacity: 30%;
	
	transition: border-color 150ms ease-in-out, opacity 150ms ease-in-out;
	
  &.active {
    opacity: 100%;
		border-color: transparent;
    & > svg {
      fill: ${Colors.MAIN_COLOR};
    }
  }
	
	&:first-child {
		border-left: 0;
	}
	
	&:last-child {
		border-right: 0;
	}
	
  @media (max-width: 600px) {
    height: 50px;

    & > svg {
      height: 20px;
      width: 20px;
    }
  }
`

export default function Nav() {
	return (
		<NavComponent>
			<NavButton className="active">
				<AiOutlineUnorderedList size="24"/>
			</NavButton>
			<NavButton>
				<BsThreeDots size="24"/>
			</NavButton>
			<NavButton>
				<BsCalendarCheck size="24"/>
			</NavButton>
		</NavComponent>
	)
}