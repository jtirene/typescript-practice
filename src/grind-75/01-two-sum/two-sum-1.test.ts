import { describe, expect, test } from '@jest/globals'
import { twoSum } from './two-sum-1'

describe('two-sum-n2', () => {
	test('nums = [2,7,11,15], target = 9', () => {
		expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
	})
})
