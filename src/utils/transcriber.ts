import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const geoip = require('geoip-lite');

interface Currency {
    code: string;
    currency: {
        symbol: string,
    };
    language: {
        code: string,
    };
}

// @ts-expect-error It will assign replace_pokemon on string. It doesn't matter if it doesn't exist already.
String.prototype.replace_pokemon = function (target: string, replacement: string): string {
    const pattern = new RegExp(`\\b${target}\\b(?=(?:(?:[^"]*"){2})*[^"]*$)`, 'g');
    
    return this.replace(pattern, replacement);
}

const rightsideCurrencies = [
    "€", // Euro
    "£", // British Pound
    "CHF", // Swiss Franc
    "kr", // Danish Krone, Norwegian Krone, Swedish Krona
    "zł", // Polish Zloty
    "Ft", // Hungarian Forint
    "Kč", // Czech Koruna
    "kn", // Croatian Kuna
    "RSD", // Serbian Dinar
    "лв", // Bulgarian Lev
    "lei", // Romanian Leu
    "₽", // Russian Ruble
    "₺", // Turkish Lira
    "₴" // Ukrainian Hryvnia
];   

// @ts-expect-error It will assign replace_currency on string. It doesn't matter if it doesn't exist already.
String.prototype.replace_currency = function (currency: string): string {
    const pattern = new RegExp(`${rightsideCurrencies.includes(currency) ? "{}" + currency : currency + "{}"}`, 'g');

    return this.replace(pattern, "${}");
}

export async function get_currency(currencies: Currency[]) {
    const { country } = await get_country();
    const currency = currencies.find((el: Currency) => el.code === country)

    return currency.currency.symbol;
}

async function get_country() {
    const response = await axios.get('https://api64.ipify.org?format=json');
    const ip = response.data.ip;
    const geo = await geoip.lookup(ip);

    return geo;
}

export function transcribe(code: string, currency: string) {
    return code
        // @ts-expect-error replace_pokemon is assigned earlier in the code.
        .replace_pokemon("catch", 'let')
        .replace_pokemon("evolve", 'for')
        .replace_pokemon("attack", '+')
        .replace_pokemon("defend", '-')
        .replace_pokemon("combine", '*')
        .replace_pokemon("split", '/')
        .replace_pokemon("trainer", 'function')
        .replace_pokemon("battle", 'if')
        .replace_pokemon("faint", 'else')
        .replace_pokemon("wildcard", 'null')
        .replace_pokemon("legendary", 'true')
        .replace_pokemon("common", 'false')
        .replace_pokemon("pokeball", '{')         // Changed from '{}' to '{' to start object literal
        .replace_pokemon("pokecapture", '}')    // Changed from '{}' to '}' to end object literal
        .replace_pokemon("pokedex_entry", ':')    // Keep as colon for key-value pairs
        .replace_pokemon("move_set", ',')         // Changed from ';' to ',' for argument separation
        .replace_pokemon("swap_move", '=')
        .replace_pokemon("mega_evolve", '=>')
        .replace_pokemon("status_effects", '|')
        .replace_pokemon("type_advantage", '&&')
        .replace_pokemon("pokecenter", 'try')
        .replace_pokemon("revive", 'catch')
        .replace_pokemon("release_move", 'return')
        .replace_pokemon("use", "println")
        .replace_currency(currency);
}
