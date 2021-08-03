/**
 * 5kyu - Extract the domain name from a URL
 *
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 *
 * domainName("http://github.com/carbonfive/raygun") == "github"
 * domainName("http://www.zombie-bites.com") == "zombie-bites"
 * domainName("https://www.cnet.com") == "cnet"
 *
 */

const domainName = (url) => {
  return url.replace(/(https?:\/\/)|(www\.)/g, "").split(".")[0];
};

console.log(domainName("http://google.com")); // "google"
console.log(domainName("http://google.co.jp")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
console.log(domainName("https://youtube.com")); // "youtube"
