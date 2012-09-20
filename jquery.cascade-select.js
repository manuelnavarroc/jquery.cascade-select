/*
 * jQuery cascade-select
 *
 * @licensed MIT <see below>
 * @licensed GPL <see below>
 *
 * @author Manuel Navarro
 * http://github.com/manuelnavarroc/jquery.cascade-select
 *
 */

/**
 * MIT License
 * Copyright (c) 2011, Luciano Costa
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy 
 * of this software and associated documentation files (the "Software"), to deal 
 * in the Software without restriction, including without limitation the rights 
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
 * copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * GPL LIcense
 * Copyright (c) 2011, Luciano Costa
 * 
 * This program is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the 
 * Free Software Foundation, either version 3 of the License, or 
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License 
 * for more details.
 * 
 * You should have received a copy of the GNU General Public License along 
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function ($) {
	$.fn.cascade = function (options) {
		var defaults = {};
		var opts = $.extend(defaults, options);

		return this.each(function () {
			$(this).change(function () {
				var selectedValue = $(this).val();

				opts.childSelect.empty();

				if (selectedValue == null || selectedValue == '') {

					opts.childSelect.attr('disabled', true);
					opts.childSelect.trigger('change');
					return;
				}

				var params = {};
				params[opts.paramName] = selectedValue;

				$.post(opts.url, params, function (items) {

					if (items.length == 0) {
						opts.childSelect.attr('disabled', true);
						opts.childSelect.trigger('change');
						return;
					}

					if (opts.appendEmpty) {
						opts.childSelect.append(
                            $('<option/>')
                                .attr('value', '')
                                .text('')
						);
					}

					$.each(items, function (index, item) {
						opts.childSelect.append(
                            $('<option/>')
                                .attr('value', item.value)
                                .text(item.text)
                        );
					});

					opts.childSelect.attr('disabled', false);
					opts.childSelect.trigger('change');
				});
			});
		});
	};
})(jQuery);

