import React from "react";

import { Avatar } from "../Avatar";

import {
	StatusContainer,
	BulletStatus,
	StatusName,
	Container,
	UserName,
	Content,
} from "./styles";

type MemberStatus = "online" | "offline";

export type MemberProps = {
	status: MemberStatus;
	avatar_url: string;
	userName: string;
	id: string;
};

type Props = {
	data: MemberProps;
};

export function Member({ data }: Props) {
	const isOnline = data.status === "online";

	return (
		<Container>
			<Avatar url={data.avatar_url} />

			<Content>
				<UserName>{data.userName}</UserName>

				<StatusContainer>
					{console.log("Status antes de mandar: " + isOnline)}
					<BulletStatus isOnline />
					<StatusName>{isOnline ? "Disponível" : "Ocupado"}</StatusName>
				</StatusContainer>
			</Content>
		</Container>
	);
}
