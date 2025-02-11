export const downloadResume = () => {
  const link = document.createElement("a")
  link.href = "/Harsh_Singh_Resume_final.pdf"
  link.download = "Harsh_Singh_Resume_final.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

