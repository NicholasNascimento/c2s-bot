import { useState } from 'react'

import * as S from './styles'

export function SettingsSideBar() {
  const [priorityStatus, setPriorityStatus] = useState<boolean>(false)
  const [timeStatus, setTimeStatus] = useState<boolean>(false)
  const [checkBoxOperator, setCheckBoxOperator] = useState<boolean>(false)
  const [checkBoxFinish, setCheckboxFinish] = useState<boolean>(false)

  return (
    <S.SettingsSideBar>
      <S.Description>Edite aqui as configurações do seu fluxo</S.Description>

      <S.Content>
        <S.TopicBox>
          <p>Prioridade do Fluxo</p><S.Info />
        </S.TopicBox>
        <S.PriorityDropDown onClick={() => setPriorityStatus(!priorityStatus)}>
          Selecione a prioridade do fluxo<S.ArrowDown />
        </S.PriorityDropDown>
        {priorityStatus &&
          <S.PriorityDropDownOptions>
            <S.PriorityOption>Opção 1</S.PriorityOption>
            <S.PriorityOption>Opção 2</S.PriorityOption>
            <S.PriorityOption>Opção 3</S.PriorityOption>
          </S.PriorityDropDownOptions>
        }
        <S.ChannelsSection>
          <p>Canais de atendimento</p>
          <S.ChannelsBox>
            <S.ChannelOption>
              <img src="./whatsapp-fill.svg" alt="Ícone do whatsapp" /> BSB Poli <S.CloseButton><S.XButton /></S.CloseButton>
            </S.ChannelOption>
            <S.ChannelOption>
              <img src="./webchat-fill.svg" alt="Ícone do webchat" /> N2 Webchat <S.CloseButton><S.XButton /></S.CloseButton>
            </S.ChannelOption>
            <S.ChannelOption>
              <img src="./messenger-fill.svg" alt="Ícone do messenger" /> Messenger Poli <S.CloseButton><S.XButton /></S.CloseButton>
            </S.ChannelOption>
            <S.ChannelOption>
              <img src="./webchat-fill.svg" alt="Ícone do webchat" /> Site comercial Webchat <S.CloseButton><S.XButton /></S.CloseButton>
            </S.ChannelOption>
          </S.ChannelsBox>
        </S.ChannelsSection>

        <S.TopicBox>
          <p>Tempo de Inatividade</p><S.Info />
        </S.TopicBox>
        <S.TimeBox>
          <S.TimeInput type="number" />
          <S.TimeDropDownSection>
            <S.TimeDropDownButton onClick={() => setTimeStatus(!timeStatus)}>Horas <S.ArrowDown /></S.TimeDropDownButton>
            {timeStatus &&
              <S.TimeDropDownBox>
                <S.TimeDropDownOption>Minutos</S.TimeDropDownOption>
              </S.TimeDropDownBox>
            }
          </S.TimeDropDownSection>
        </S.TimeBox>

        <S.TopicBox>
          <p>Mensagem padrão de erro</p><S.Info />
        </S.TopicBox>

        <S.MessageTextArea />

        <S.CheckBoxSection>
          <S.CheckBoxBox>
            <S.CheckBox onClick={() => setCheckBoxOperator(!checkBoxOperator)}>
              {checkBoxOperator &&
                <S.Check />
              }
            </S.CheckBox>
            <p>Encerrar atendimento quando operador entrar na conversa.</p>
          </S.CheckBoxBox>

          <S.CheckBoxBox>
            <S.CheckBox onClick={() => setCheckboxFinish(!checkBoxFinish)}>
              {checkBoxFinish &&
                <S.Check />
              }
            </S.CheckBox>
            <p>Encerrar o fluxo caso a conversa seja fechada.</p>
          </S.CheckBoxBox>
        </S.CheckBoxSection>
      </S.Content>
    </S.SettingsSideBar>
  )
}