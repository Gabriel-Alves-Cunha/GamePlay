import React from "react";

import DiscordSvg from "../../assets/discord.svg";

import { Container, Content } from "./styles";

type Props = {
	guildId: string;
	iconId: string | null;
};

const { CDN_IMG } = process.env;

export function GuildIcon({ guildId, iconId }: Props) {
	const uri = `${CDN_IMG}/icons/${guildId}/${iconId}.png`;

	return (
		<Container hasIconId={!!iconId}>
			{iconId ? (
				<Content
					source={{ uri }}
					resizeMode="cover"
					onError={(e) => console.error(e)}
				/>
			) : (
				<DiscordSvg width={40} height={40} />
			)}
		</Container>
	);
}
