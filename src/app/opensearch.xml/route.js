export default function OpenSearchXml() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>30tools</ShortName>
  <Description>Search free online tools for image, video, PDF, and text processing</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">https://30tools.com/favicon.ico</Image>
  <Image width="32" height="32" type="image/png">https://30tools.com/icons/icon-32x32.png</Image>
  <Url type="text/html" template="https://30tools.com/search?q={searchTerms}"/>
  <Url type="application/x-suggestions+json" template="https://30tools.com/api/search/suggestions?q={searchTerms}"/>
  <moz:SearchForm>https://30tools.com</moz:SearchForm>
  <Query role="example" searchTerms="image compressor" />
  <Developer>30tools.com Team</Developer>
  <Contact>support@30tools.com</Contact>
  <Tags>tools file converter image video pdf compression</Tags>
  <Language>en-us</Language>
  <OutputEncoding>UTF-8</OutputEncoding>
</OpenSearchDescription>`,
    {
      headers: {
        'Content-Type': 'application/opensearchdescription+xml',
      },
    }
  );
}
