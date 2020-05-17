import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Select } from '@vkontakte/vkui';

import './Auth.css';

const osName = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Настройка расписания
		</PanelHeader>
		{/* <img className="Persik" src={persik} alt="Persik The Cat"/> */}
       

        <Div className="auth-stage">
        <Select className="select" placeholder="Выберите степень">
            <option value="b">Бакалавриат</option>
            <option value="m">Магистратура</option>
        </Select>
        </Div>
        <Div className="Course">
        <Select className="select" placeholder="Выберите курс">
            <option value="1">Первый</option>
            <option value="2">Второй</option>
            <option value="3">Первый</option>
            <option value="4">Второй</option>
        </Select>
        </Div>
	</Panel>
    
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
