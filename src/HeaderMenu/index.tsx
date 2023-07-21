import {
	Container,
	UserName,
	UserInfo,
	UserImage,
	UserGreeting,
	UserWraper,
	Icon,
	Info,
} from "./styles";

export function HeaderMenu() {
	return (
		<Container>
			<UserInfo>
				<UserWraper>
					<UserImage
						source={{
							uri: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
						}}
					/>
					<Info>
						<UserGreeting>Olá,</UserGreeting>
						<UserName>Usuário</UserName>
					</Info>
				</UserWraper>
				<Icon name="tooth" size={40} color="white" />
			</UserInfo>
		</Container>
	);
}
