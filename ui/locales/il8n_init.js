/*
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * File: il8n_init.js
 * File Created: Tuesday, 5th December 2023 9:54:17 am
 * Author: Nebula Studios (https://discord.gg/CsphJ7Wetz)
 *             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * The modification of this file is prohibited without explicit permission from Nebula Studios.
 * Any unauthorized modification of this file will result in support being revoked.
 *             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Last Modified: Thursday, 7th December 2023 8:34:56 am
 * Modified By: Simone Magenes
 *             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * License: Creative Commons Attribution Non-commercial No-derivatives 4.0 International
 * License Abbreviation: CC BY-NC-ND 4.0
 * License URL: https://creativecommons.org/licenses/by-nc-nd/4.0/
 * Copyright 2023 - 2023, Nebula Studios
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

$(function () {
	i18next
		.use(i18nextHttpBackend)
		.init({
			debug: true,
			fallbackLng: 'en',
			backend: {
				loadPath: './locales/translations/{{lng}}.json'
			}
		}, (err, t) => {
			if (err) return console.error(err);

			// Initialize jquery-i18next with the i18next instance
			jqueryI18next.init(i18next, $);

			// Localize the body after the translations are loaded
			$('body').localize();
		});
});

