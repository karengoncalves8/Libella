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
    OcupaçãoPaciente VARCHAR(60) NOT NULL,
    SintomasPaciente VARCHAR(400) NOT NULL,
    EmailPaciente VARCHAR(100) NOT NULL,
    SenhaPaciente VARCHAR(100) NOT NULL,
    IdPsicologo INT NOT NULL,
    FOREIGN KEY (IdPsicologo) REFERENCES Psicologos (IdPsicologo) -- Chave estrangeira do psicologo
);


-- CRIANDO A TABELA ATIVIDADES
CREATE TABLE Atvidades (
	IdAtividade INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    TituloAtividade VARCHAR(50),
    InstrucoesAtividade VARCHAR(240),
    EntregaAtividade DATE,
    IdPsicologo INT NOT NULL,
    FOREIGN KEY (IdPsicologo) REFERENCES Psicologos (IdPsicologo), -- Chave estrangeira do psicologo
    IdPaciente INT NOT NULL,
    FOREIGN KEY (IdPaciente) REFERENCES Pacientes (IdPaciente) -- Chave estrangeira do paciente
);

-- CRIANDO A TABELA REGISTROS (Registro de emoções)
CREATE TABLE Registros (
	IdRegistro INT PRIMARY KEY AUTO_INCREMENT,
    Registro VARCHAR(50),
    Anotacoes VARCHAR(250),
    IdPsicologo INT NOT NULL,
    FOREIGN KEY (IdPsicologo) REFERENCES Psicologos (IdPsicologo), -- Chave estrangeira do psicologo
    IdPaciente INT NOT NULL,
	FOREIGN KEY (IdPaciente) REFERENCES Pacientes (IdPaciente) -- Chave estrangeira do paciente
);
-- "INSERT INTO Psicologos (NomePsicologo, TelefonePsicologo, CpfPsicologo, RgPsicologo, CrpPsicologo, CidadePsicologo, EstadoPsicologo, EnderecoPsicologo, EmailPsicologo, SenhaPsicologo) VALUES ('".$data->NomePsicologo."','".$data->TelefonePsicologo."','".$data->CpfPsicologo."','".$data->RgPsicologo."','".$data->CrpPsicologo."','".$data->CidadePsicologo."','".$data->EstadoPsicologo."','".$data->EnderecoPsicologo."','".$data->EmailPsicologo."','".$data->SenhaPsicologo."');";