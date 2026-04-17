/** @license Apache-2.0 */

/* eslint-disable id-length */

'use strict';

/**
* The minimum base 10 exponent for a subnormal half-precision floating-point number.
*
* @module @stdlib/constants-float16-min-base10-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT16_MIN_BASE10_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float16-min-base10-exponent-subnormal' );
* // returns -8
*/


// MAIN //

/**
* The minimum base 10 exponent for a subnormal half-precision floating-point number.
*
* @constant
* @type {integer32}
* @default -8
* @see [Half-precision floating-point format]{@link https://en.wikipedia.org/wiki/Half-precision_floating-point_format}
*/
var FLOAT16_MIN_BASE10_EXPONENT_SUBNORMAL = -8|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT16_MIN_BASE10_EXPONENT_SUBNORMAL;
