import React from "react";
import styled from "styled-components";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {BsCalendarCheck, BsThreeDots} from 'react-icons/bs';
import {DisplayedTodoStatus} from '../../features/todoSlice.types';
import {changeDisplayedTodos, selectDisplayedTodosStatus} from "../../features/todosSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getButton} from "./nav.services";

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

  &:first-child {
    border-left: 0;
  }

  &:last-child {
    border-right: 0;
  }

  &.active {
    opacity: 100%;
    border-color: transparent;

    & > svg {
      fill: #ca79aa;
    }
  }

  @media (max-width: 600px) {
    height: 50px;

    & > svg {
      height: 20px;
      width: 20px;
    }
  }
`

export default function Nav(): JSX.Element {
	const todoStatus = useAppSelector(selectDisplayedTodosStatus);
	const dispatch = useAppDispatch();

	const onClickButton = (e: React.MouseEvent) => {
		const button = getButton(e.target as HTMLElement);

		if (button) {
			const status = button.id as DisplayedTodoStatus;
			dispatch(changeDisplayedTodos(status));
		}
	}

	const isAllDisplayed = todoStatus === 'all';
	const isActiveDisplayed = todoStatus === 'active';
	const isCompletedDisplayed = todoStatus === 'completed';

	console.log(todoStatus)

	return (
		<NavComponent onClick={onClickButton}>
			<NavButton id="all" className={`${isAllDisplayed ? 'active' : ''}`}>
				<AiOutlineUnorderedList size="24"/>
			</NavButton>
			<NavButton id="active" className={`${isActiveDisplayed ? 'active' : ''}`}>
				<BsThreeDots size="24"/>
			</NavButton>
			<NavButton id="completed" className={`${isCompletedDisplayed ? 'active' : ''}`}>
				<BsCalendarCheck size="24"/>
			</NavButton>
		</NavComponent>
	)
}