const url=new URL("https://jsonmock.hackerrank.com/api/countries?");
var pageRequest=4;
var alphacode="AF"
//url.searchParams.append("page",pageRequest);
url.searchParams.append("alpha2Code",alphacode);
url.searchParams.append("data",alphacode);

console.log(url.href);
