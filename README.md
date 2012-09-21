jquery.cascade-select
=====================

Simple jQuery plug-in that helps to make &lt;select> HTML elements to refresh their content from a JSON source in response to the 'change' event of another &lt;select> element.

The code is based on this Stack Overflow thread:
http://stackoverflow.com/questions/4458970/cascading-drop-downs-in-mvc-3-razor-view

Example
-------

    $('#SelectProduct').cascade({
        url: '/Products/GetProductItems',
        paramName: 'productId',
        appendEmpty: true,
        childSelect: $('#SelectItem')
    });
	
Remarks
-------

The JSON object returned by the URL must be an array of objects containing the properties `value` and `text`, where `value` refers to the text that will be assigned to the _value_ property of the _select_ element, and `text` refers to the _inner text_ of the _select_ element.

An example of the JSON output expected could be something like:

    [{value: "1", text: "dog"},{value: "2", text: "cat"},{value: "3", text: "fish"}]
	
It is also important to notice that the URL request are made by a call to the **jQuery.post** method.
	
Parameters
----------

+ **url**: URL that will be passed as parameter in a **jQuery.post** call to retrive the data for the child linked _select_ element.
+ **paramName**: name of the **POST** parameter that contains the selected value of the "parent" _select_ element.
+ **appendEmpty**: if set to _true_ an empty element (value = '', text = '') will be added as first element to the _option_ list of the _select_ element.
+ **childSelect**: a jQuery reference to a _select_ HTML element that will change it's available options in response to the _cahnge_ event of the _parent_ element.