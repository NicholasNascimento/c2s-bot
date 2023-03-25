import { useCallback, useEffect, useState, useRef, useContext } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  updateEdge,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlowProvider,
  Edge,
  Controls,
  MiniMap} from 'reactflow'

import { InputSideBar } from '../components/InputSideBar';
import { ActionsSideBar } from '../components/ActionsSideBar';
import { DataContext } from '../context/DataContext';
import { inputNodeData } from '../components/InputSideBar/nodeData'
import { actionsNodeData } from '../components/ActionsSideBar/nodeData'
import { initialEdges, initialNodes, nodeTypes, getId, nodeColor } from './nodesData'

import 'reactflow/dist/style.css'
import * as S from './styles'
import { SettingsSideBar } from '../components/SettingsSideBar';

export default function Home() {
  const [titleChange, setTitleChange] = useState<boolean>(false)
  const [title, setTitle] = useState<string>("Título do bot")
  const [option, setOption] = useState<string>("input")
  const { allMessages, setAllMessages } = useContext(DataContext)
  
  const reactFlowWrapper = useRef(null);
  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes] = useNodesState(initialNodes)
  const [edges, setEdges] = useEdgesState<Edge[]>(initialEdges)
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  function handleChangeTitle() {
    setTitleChange(true);
    setTitle("")
  }

  // useEffect(() => {
  //   console.log(nodes, edges, allMessages)
  // }, [nodes, edges, allMessages])

  return (
    <ReactFlowProvider>
      <S.Container>
        <S.Sidebar />

        <S.Main>
          <S.HeaderExample />

          <S.FlowHeader>
            <S.TitleBox>
              <S.BackButton>
                <S.ArrowLeft />Voltar
              </S.BackButton>
              <img src="./bot-title.svg" alt="Ícone do bot" />
              {titleChange ?
              <>
                <S.TitleInput
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                />
                <S.CheckButton onClick={() => setTitleChange(false)}>
                  <S.Check />
                </S.CheckButton>
              </> :
              <S.TitleChange onClick={() => handleChangeTitle()}>
                {title} <S.Pencil />
              </S.TitleChange>
              }
            </S.TitleBox>

            <S.FlowOptions>
              <S.SimulateButton>
                <S.Play />Simular fluxo
              </S.SimulateButton>

              <S.SaveAndExitButton><p>Salvar e sair</p></S.SaveAndExitButton>

              <S.ApproveAndSaveButton>
                Aprovar e salvar<S.ArrowRight className='arrow-right' />
              </S.ApproveAndSaveButton>
            </S.FlowOptions>
          </S.FlowHeader>

          <S.Content>
            <S.OptionsBox>
              <S.OptionsHeader>
                <S.OptionsButton isActive={option === "input" && true} onClick={() => setOption("input")}>Entrada</S.OptionsButton>
                <S.OptionsButton isActive={option === "actions" && true} onClick={() => setOption("actions")}>Ações</S.OptionsButton>
                <S.OptionsButton isActive={option === "settings" && true} onClick={() => setOption("settings")}>Configurações</S.OptionsButton>
              </S.OptionsHeader>

              {option === "input" ?
              <S.OptionsSection>
                <S.InputDescriptionBox>
                  <img src="./input-description-img.svg" alt="Imagem de elemento sendo arrastado" />
                  <S.DescriptionInfoBox>
                    <S.InputDescription>Arraste para o fluxo as condições de entrada para definir com o PoliBot inicia a automação</S.InputDescription>
                    <S.InfoContent><a>Saiba mais</a><S.Info /></S.InfoContent>
                  </S.DescriptionInfoBox>
                </S.InputDescriptionBox>

                <S.DragAndDropBox>
                  <InputSideBar inputNodeData={inputNodeData} />
                </S.DragAndDropBox>
              </S.OptionsSection> : option === "actions" ?
              <S.OptionsSection>
                <S.ActionsDescription>Arraste para o fluxo a ação que deseja utilizar.</S.ActionsDescription>

                <S.DragAndDropBox>
                  <ActionsSideBar actionsNodeData={actionsNodeData} />
                </S.DragAndDropBox>
              </S.OptionsSection> :
              <S.OptionsSection>
                <SettingsSideBar />
              </S.OptionsSection>
              }
            </S.OptionsBox>

            <S.FlowBox className="reactflow-wrapper" ref={reactFlowWrapper}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onEdgeUpdate={onEdgeUpdate}
                onEdgeUpdateStart={onEdgeUpdateStart}
                onEdgeUpdateEnd={onEdgeUpdateEnd}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                onDragOver={onDragOver}
                nodeTypes={nodeTypes}
                fitView
              >
                <Controls />
                <MiniMap nodeColor={nodeColor} pannable zoomable />
              </ReactFlow>
            </S.FlowBox>
          </S.Content>
        </S.Main>
      </S.Container>
    </ReactFlowProvider>
  )
}
