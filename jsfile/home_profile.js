


const downloadResumeBtn = document.getElementById('downloadResumeBtndesktop');


downloadResumeBtn.addEventListener('click', async () => {
    const resumeURL = 'resume/IEEE-Volunter_Khan.pdf';
    try {
        const response = await fetch(resumeURL);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'Khan-Tanvir-Ferdous-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(blobUrl);
    } catch (err) {
        // Fallback: just open it if download fails
        window.open(resumeURL, '_blank');
    }
});