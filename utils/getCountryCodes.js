import countries from '../const/countries'

export default function getCountryCodes(countryCode) {
    return countries[countryCode]
}