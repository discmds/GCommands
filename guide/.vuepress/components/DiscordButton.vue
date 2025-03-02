<template>
	<a
		v-if="type === 'link' && url && !disabled"
		class="discord-button discord-button-link"
		:href="url"
		target="_blank"
		rel="noopener noreferrer"
	>
		<img v-if="image" class="discord-button-emoji" :src="image" alt="" />
		<slot></slot>
		<outbound-link-icon />
	</a>
	<button
		v-else
		class="discord-button"
		:class="[`discord-button-${type}`, disabled ? 'discord-button-disabled' : '']"
		:disabled="disabled"
	>
		<img v-if="image" class="discord-button-emoji" :src="image" alt="" />
		<slot></slot>
		<outbound-link-icon v-if="type ==='link'" />
	</button>
</template>

<script>
import OutboundLinkIcon from './OutboundLinkIcon.vue'

export default {
	name: 'DiscordButton',
	components: {
		OutboundLinkIcon,
	},
	props: {
		disabled: Boolean,
		image: String,
		type: {
			type: String,
			'default': 'primary',
		},
		url: String,
	}
};
</script>

<style>
.discord-buttons button.discord-button,
.discord-buttons a.discord-button {
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 32px;
	min-width: 60px;
	font-size: 14px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
	line-height: 16px;
	margin: 4px 8px 4px 0;
	padding: 2px 16px;
	border: none;
	border-radius: 3px;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.15s ease, color 0.15s ease;
}

.discord-buttons a.discord-button:hover {
	color: #fff;
	text-decoration: none;
}

.discord-buttons .discord-button .discord-button-emoji {
	width: 19px;
	height: 19px;
	margin-right: 4px;
}

.discord-buttons .discord-button.discord-button-primary {
	background-color: #5865f2;
}

.discord-buttons .discord-button:not(.discord-button-disabled).discord-button-primary:hover {
	background-color: #4752c4;
}

.discord-buttons .discord-button.discord-button-secondary,
.discord-buttons .discord-button.discord-button-link {
	background-color: #4f545c;
}

.discord-buttons .discord-button:not(.discord-button-disabled).discord-button-secondary:hover,
.discord-buttons .discord-button:not(.discord-button-disabled).discord-button-link:hover {
	background-color: #474c53;
}

.discord-light-theme .discord-buttons .discord-button.discord-button-secondary,
.discord-light-theme .discord-buttons .discord-button.discord-button-link {
	background-color: #747f8d;
}

.discord-light-theme .discord-buttons .discord-button:not(.discord-button-disabled).discord-button-secondary:hover,
.discord-light-theme .discord-buttons .discord-button:not(.discord-button-disabled).discord-button-link:hover {
	background-color: #68727f;
}

.discord-buttons .discord-button.discord-button-success {
	background-color: #3ba55c;
}

.discord-buttons .discord-button:not(.discord-button-disabled).discord-button-success:hover {
	background-color: #359553;
}

.discord-buttons .discord-button.discord-button-danger {
	background-color: #ed4245;
}

.discord-buttons .discord-button:not(.discord-button-disabled).discord-button-danger:hover {
	background-color: #d53b3e;
}

.discord-buttons .discord-button:disabled,
.discord-buttons .discord-button.discord-button-disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.discord-buttons .discord-button .outbound-link-icon {
	margin-left: 8px;
	display: inline-flex;
}
</style>