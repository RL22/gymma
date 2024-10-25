document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    const keyword = document.getElementById('keywordInput').value;
  
    // Fetch SEO Data using the Google Search Console API
    const token = await getOAuthToken();
    const seoData = await fetchSEOData(token, keyword);
  
    // Display the SEO Data
    document.getElementById('seoDataDisplay').innerText = JSON.stringify(seoData, null, 2);
  });
  
  document.getElementById('generateBriefBtn').addEventListener('click', async () => {
    const seoData = document.getElementById('seoDataDisplay').innerText;
    
    // Generate Content Brief using OpenAI
    const brief = await generateContentBrief(seoData);
    
    // Display the content brief
    document.getElementById('briefDisplay').innerText = brief;
  });
  