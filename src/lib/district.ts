import fetchDistricts from '../fetchers/districts-fetcher'

type Language = 'en' | 'np'
export type Key =
	| 'id'
	| 'province_id'
	| 'name'
	| 'area_sq_km'
	| 'website'
	| 'headquarter'

export interface IDistricts {
	id: number
	province_id: number
	name: string
	area_sq_km: string
	website: string
	headquarter: string
}

/**
 * Class District
 */
export class District {
	private districts: IDistricts[]
	private lang

	/**
	 * Category constructor.
	 * @param string lang
	 * @throws exception
	 */
	constructor(lang: Language = 'en') {
		try {
			this.lang = lang
			this.districts = fetchDistricts(this.lang)
		} catch (err) {
			throw new Error(`Districts of given language doesn't exists. ${err}`)
		}
	}

	/**
	 * Get list of all districts
	 *
	 * @returns districts array
	 */
	public allDistricts() {
		return this.districts
	}

	/**
	 * Find district deatils by unique id
	 *
	 * @param id
	 * @returns district | null
	 */
	public find(id: number) {
		const district = this.districts.find(el => el.id === id)
		return district ? district : null
	}

	/**
	 * Get districts with municipalities
	 *
	 * @return array
	 * @throws LoadingException
	 */
	public getDistrictsWithMunicipalities() {
		// const municipality = new M
	}

	/**
	 * Get districts by province id
	 *
	 * @param provinceId
	 * @return array|null
	 */
	public getDistrictsByProvince(provinceId: number) {
		return this.districts.filter(el => el.province_id === provinceId)
	}

	/**
	 * Get district with largest area
	 *
	 * @return district
	 */
	public largest() {
		// let areas = this.districts.map(el => el.area_sq_km)
		// if (this.lang === 'np') {
		// 	areas.map(el => parseInt(numericEnglish(el)))
		// }

		// console.log(areas)
	}

	/**
	 * Search Districts
	 *
	 * @param key
	 * @param value
	 * @return array of districts that match with given key
	 */
	public search(key: Key, value: string | number) {
		return this.districts.filter(el => (el[key] ? el[key] === value : null))
	}
}