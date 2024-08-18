import Logo from '../../assets/logo.svg';
import {
  Button,
  Conteiner,
  Form,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';

export function Login() {
  return (
    <Conteiner>
      <LeftContainer>
        <img src="{Logo}" alt="logo-web" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, sela bem vindo ao <span>Dev Burguer!</span> Acesse com seu{' '}
          <span>Login e senha.</span>
        </Title>
        <Form>
          <InputConteiner>
            <label>Email</label>
            <Input type="email" />
          </InputConteiner>

          <InputConteiner>
            <label>Senha</label>
            <Input type="password" />
          </InputConteiner>
          <Link>Esquece minha senha.</Link>
          <Button>Entar</Button>
        </Form>
        <Link>Não possui conta?Clique aqui.</Link>
      </RightContainer>
    </Conteiner>
  );
}
