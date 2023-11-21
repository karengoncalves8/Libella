CREATE DATABASE id21156566_libellatcc;

USE id21156566_libellatcc;

-- Criando tabela de Psicolgos (Tabela chave)
CREATE TABLE Psicologos (
	IdPsicologo INT PRIMARY KEY AUTO_INCREMENT,
	NomePsicologo VARCHAR(100) NOT NULL,
	TelefonePsicologo VARCHAR(20) NOT NULL,
    CpfPsicologo VARCHAR(14) NOT NULL,
    RgPsicologo VARCHAR(13) NOT NULL,
	CrpPsicologo VARCHAR(12) NOT NULL,
    CidadePsicologo VARCHAR(50) NOT NULL,
    EstadoPsicologo VARCHAR(50) NOT NULL,
	EnderecoPsicologo VARCHAR(100) NOT NULL,
	EmailPsicologo VARCHAR(100) NOT NULL,
	SenhaPsicologo VARCHAR(100) NOT NULL
);

-- Criando tabela de Pacientes (Tabela Chave)
CREATE TABLE Pacientes (
	IdPaciente INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    NomePaciente VARCHAR(100) NOT NULL,
    TelefonePaciente VARCHAR(20) NOT NULL,
    CpfPaciente VARCHAR(14) NOT NULL,
    RgPaciente VARCHAR(13) NOT NULL,
    CidadePaciente VARCHAR(50) NOT NULL,
    EstadoPaciente VARCHAR(50) NOT NULL,
    EnderecoPaciente VARCHAR(100) NOT NULL,
    EscolaridadePaciente VARCHAR(60) NOT NULL,
    OcupacaoPaciente VARCHAR(60) NOT NULL,
    SintomasPaciente VARCHAR(400) NOT NULL,
    EmailPaciente VARCHAR(100) NOT NULL,
    SenhaPaciente VARCHAR(100) NOT NULL,
    IdPsicologo INT NOT NULL,
    FOREIGN KEY (IdPsicologo) REFERENCES Psicologos (IdPsicologo) -- Chave estrangeira do psicologo
);

-- CRIANDO A TABELA ATIVIDADES
CREATE TABLE Atividades (
	IdAtividade INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    TituloAtividade VARCHAR(50),
    InstrucoesAtividade VARCHAR(240),
    EntregaAtividade DATE,
    Status VARCHAR(20),
    IdPsicologo INT NOT NULL,
    FOREIGN KEY (IdPsicologo) REFERENCES Psicologos (IdPsicologo), -- Chave estrangeira do psicologo
    IdPaciente INT NOT NULL,
    FOREIGN KEY (IdPaciente) REFERENCES Pacientes (IdPaciente) -- Chave estrangeira do paciente
);
-- CRIANDO A TABELA REGISTROS (Registro de emoções)
CREATE TABLE Registros (
	IdRegistro INT PRIMARY KEY AUTO_INCREMENT,
    Registro INT NOT NULL,
    Data DATE,
    Anotacoes VARCHAR(250),
    IdPsicologo INT NOT NULL,
    FOREIGN KEY (IdPsicologo) REFERENCES Psicologos (IdPsicologo), -- Chave estrangeira do psicologo
    IdPaciente INT NOT NULL,
	FOREIGN KEY (IdPaciente) REFERENCES Pacientes (IdPaciente) -- Chave estrangeira do paciente
);

-- CRIANDO A TABELA CONSULTAS (Agenda)
CREATE TABLE Consultas (
	IdConsulta INT PRIMARY KEY AUTO_INCREMENT,
    Data DATE,
    Horario TIME,
    IdPsicologo INT NOT NULL,
    FOREIGN KEY (IdPsicologo) REFERENCES Psicologos (IdPsicologo), -- Chave estrangeira do psicologo
    NomePaciente VARCHAR(100) NOT NULL
);
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO Psicologos (
    NomePsicologo,
	TelefonePsicologo,
    CpfPsicologo,
    RgPsicologo,
	CrpPsicologo,
    CidadePsicologo,
    EstadoPsicologo,
	EnderecoPsicologo,
	EmailPsicologo,
	SenhaPsicologo
)
VALUES
('teste', '(12)98737-2817', '234.444.321-66', '99.524.821-1', '12/321123', 'teste', 'São Paulo', 'teste, 99, teste', 'teste', 'teste'),
('Andressa', '(12)98834-8813', '123.340.321-12', '12.554.321-9', '22/441663', 'São José dos Campos', 'São Paulo', 'Rua dos Alfaiates, 777, Parque Novo Horizonte', 'andressa@gmail.com', 'andressa123');

INSERT INTO Pacientes (
    NomePaciente,
    TelefonePaciente,
    CpfPaciente,
    RgPaciente,
    CidadePaciente,
    EstadoPaciente,
    EnderecoPaciente,
    EscolaridadePaciente,
    OcupacaoPaciente,
    SintomasPaciente,
    EmailPaciente,
    SenhaPaciente,
    IdPsicologo
)
VALUES
('Olivier Florence', '(12)98857-9012', '537.349.048-12', '32.232.222-5', 'São José dos Campos', 'São Paulo', 'Rua dos Ferreiros, 91, Parque Novo Horizonte', 'Ensino médio completo', 'Trabalha no hortfruit', 'Ansiedade e depressão', 'olivier@gmail.com', 'olivier123', 1),
('Amelie Florence', '(12)98899-1234', '876.456.123-32', '12.223.234-7', 'São José dos Campos', 'São Paulo', 'Rua dos Ferreiros, 91, Parque Novo Horizonte', 'Ensino fundamental completo', 'Estuda no Sônia Maria', 'depressão', 'amelie@gmail.com', 'amelie123', 1),
('Arthur Cervero', '(12)99757-1277', '543.890.321-65', '99.544.123-6', 'Taubaté', 'São Paulo', 'Rua da juventude, 91, Parque das Ameixas', 'Ensino superior em TI', 'Trabalha no Facebook, e estuda na faculdade da USP', 'Ansiedade', 'arthur@gmail.com', 'arthur123', 1),
('Ellie', '(15)98712-1199', '123.321.456-99', '51.888.888-8', 'Rio de Janeiro', 'Rio de Janeiro', 'Rua dos Jardineiro, 777, Vila Armadeira', 'Ensino médio completo', 'Trabalha no hortfruit', 'Ansiedade e depressão', 'ellie@gmail.com', 'ellie123', 1),
('Wanderley', '(12)98811-2233', '231.876.564-88', '55.551.118-2', 'São José dos Campos', 'São Paulo', 'Rua das flores, 91, Vila das Cerejeiras', 'Ensino médio completo', 'Trabalha no hortfruit', 'Ansiedade e depressão', 'wanderley@gmail.com', 'wanderley123', 2);

-- "INSERT INTO Psicologos (NomePsicologo, TelefonePsicologo, CpfPsicologo, RgPsicologo, CrpPsicologo, CidadePsicologo, EstadoPsicologo, EnderecoPsicologo, EmailPsicologo, SenhaPsicologo) VALUES ('".$data->NomePsicologo."','".$data->TelefonePsicologo."','".$data->CpfPsicologo."','".$data->RgPsicologo."','".$data->CrpPsicologo."','".$data->CidadePsicologo."','".$data->EstadoPsicologo."','".$data->EnderecoPsicologo."','".$data->EmailPsicologo."','".$data->SenhaPsicologo."');";

INSERT INTO Consultas (
    Data,
    Horario,
    IdPsicologo,
    NomePaciente
)
VALUES
	('2023-10-24',  '13:00', 2, 'Olivier Florence'), -- Consulta do Oliver com a Andressa
    ('2023-10-29',  '16:30', 1, 'Amelie Florence'); -- Consulta da Amelie com o teste
    
INSERT INTO Registros (
    Registro,
    Data,
    Anotacoes,
    IdPsicologo,
    IdPaciente
)
VALUES
	(2,  '2023-11-01', 'Tive um desempenho ruim na prova', 1, 1), -- Registro do Oliver do sentimento MAL, paciente do Teste
	(4,  '2023-11-05', 'Fui muito produtivo!', 1, 1), -- Registro do Oliver do sentimento BEM, paciente do Teste
    (3,  '2023-11-09', 'Não realizei as atividades que deveria', 1, 1), -- Registro do Oliver do sentimento NEUTRO, paciente do Teste
    (1,  '2023-11-13', 'Briguei com meus familiares', 1, 1), -- Registro do Oliver do sentimento HORRIVEL, paciente do Teste
    (5,  '2023-11-17', 'Fui ao cinema com amigos', 1, 1), -- Registro do Oliver do sentimento FELIZ, paciente do Teste
    (3,  '2023-11-21', 'Me sinto ansioso', 1, 1), -- Registro do Oliver do sentimento NEUTRO, paciente do Teste
    (1,  '2023-11-25', 'Tive ataques de pânico constantes', 1, 1), -- Registro do Oliver do sentimento HORRIVEL, paciente do Teste
    (4,  '2023-11-29', 'Briguei com meus familiares', 1, 1), -- Registro do Oliver do sentimento BEM, paciente do Teste
    (5,  '2023-11-23', 'Passei o dia com minha namorada', 1, 1), -- Registro do Oliver do sentimento FELIZ, paciente do Teste
    (5,  '2023-10-12', 'Passei o dia com minha namorada', 1, 2), -- Registro da Amelie do sentimento FELIZ, paciente do Teste
	(4,  '2023-11-12', 'Fui ao cinema com amigos', 1, 2), -- Registro da Amelie do sentimento BEM, paciente do Teste
    (2,  '2023-11-21', 'Vi a nota do ENEM', 1, 2); -- Registro da Amelie do sentimento MAL, paciente do Teste

INSERT INTO Atividades (
    TituloAtividade,
    EntregaAtividade,
    InstrucoesAtividade,
    Status,
    IdPsicologo,
    IdPaciente
)
VALUES 
    ('Roda da Vida', '2023-11-02', 'Escolha uma pontuação para cada um dos aspectos traçados de acordo com o grau de satisfação que sente em relação a ele. A pontuação varia entre o número 1 e 10, sendo 10 a pontuação máxima. Quanto mais baixa for a pontuação, mais se aproxima do centro e, quanto mais elevada, mais próxima da margem', 'Feita', 1, 1);
