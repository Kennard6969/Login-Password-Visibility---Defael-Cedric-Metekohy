
// untuk membuka dan menutup password //

const showHiddenPassword = (inputId, iconId) => {
  const input = document.getElementById(inputId),
        iconEye = document.getElementById(iconId)

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text'
      iconEye.classList.add('ri-eye-line')
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      input.type = 'password'
      iconEye.classList.remove('ri-eye-line')
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}

showHiddenPassword('password', 'input-icon')

// untuk pop up foto, nama dan quote //

Swal.fire({
  imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_GkisjgVoeEPhZ_OKeZ45vyNolY2Y5hQW0MVhMAHzeKFiePUvr8A1aZPa83w6PFJtY4Az18JrdQ33bYsn0DyetFNYNzVCNfE-diFVLuSnwaHHK54RMhYlXHE4IMGV0DzcS8H2KMqUrjbnRBNbALgK6nyvXciYabFVFqmISYlEnHtz2ayXQ9_ct55NAjk2QXcFwOF-a-490RedZ5-dej6_D5FyKt4zVvjiR0Hbjo5YuFk5r6HHicUgHcjrowNW9mlbJjTCahoL_jh1-NdIe2TekU7w9OstFxkpLq4s-41Qi53nVeNq9wQynfyRUKeCjX3f_Oa6M-WBFSYCfgzxW9qfa1Vlq3IFBpSUvgkbb7eyfa-JlCcHruWQkyRH7hTkWm4ucdRzTc6l5Ops8PXUrlePVIHA9Opo5X1Byvm_ciOyjDQfRITq0lREvtAy7mF-ZGDWDUOKJWaNfzAkl8dAm6KkyGUcgHzYy5urOChlhB9r6ZKkr3wXKPStBPwL4dPzIRNqijFEvqaupNxuGI6ekQxTYjqfe6p_e7wdrLPVxmcmf1BS0igJewXnaJXF-kyG6ogHHWXuIalUxyiFQYfUdeY5dT6NWMYGS22p_RGhuh6ow0ELBkjM2ttAQvF5qDy7lLJUyj3AdmAcs96VjS32bHDoN1pFL0so0DUHSQfXNLB3dqCf7MH0LTg271_TwX86kunGN0UARC34i9GqFiJtprr42TKfRsACt-SfgiU-ULjbMw5v4Ho6n8DbLoA-MK_FqzupHzTSTe_8ruEscHvDYABq3qkSsCesQwyUppwVDRPP2wuVI7rga3mYtOndN1iLwYSTcSmjnKN0-YnOa4KJ_Zz_0nxuT66nCDqDxa4u8u1XixSQW-4Nfj692jiStW0r4Jr0_Tunxa6yBjfd_HbW5gcfHkHhl8qeyF1hqqc5deCNBQpQ2RO1Hhs1ieIpLpYClCwqmg7VQJX8-kZNy4OMMGWBzJgMiBYpOPY0fpnkVQpLjC_ZTDd3_dYK7CgsATF-M315Gt_9VdJ7gX5heH9rtnvLABDuzAbGrAmuQXkqP23in5tSopEaJf2NTir4ALHIgvJ_-eL80YF6hq3EnnUmTXQS4i9q-f2w0v-YeiDZ13naFMGC8lJxOZ5xVd29GZpK7ihL8VmqP-JjpJEnI4uu8DHPTm9xeCAbb-IBSUiEtKdi2Cor-Bg-ZSBjLEkdDDSaThCpz3_hzHgM8GHSQ3IBVkImnqKER4wCOdKxBvNs_klezFomz1XcHcO4X_KZUZuRiMaXDisRlNwEiNtJXG3laTPa96XkhKjlEKU6oQTSjBfqA28aXlu09pqDJny-h2Zp3MkMpmveC7ymk62Rl39Q_g41uOKsXUOfjvPw-p146fgLBNyygd9CFUEnPA0O4SrVFGlwbHOIVyvaBKWcVafAnrwsupgPzvW04nteSYWpb3f6CfJFnhSBM45Qk_a45NMzyu0ObJlnbs3hQ9UZtnD1jrJaG9b8KABx9U4HOsEVd-DJedbyjuCuLmRQ1CnraUPxJYVp-Pi34GEU-Qu_eyuY1BxpdAIMzxCN5XPZ9eXaMjf8ErT11gyoL-7wfu3RZY99x-6UNcOfiL8koUjWaHTg=w1000",
  imageWidth: 300,
  imageHeight: 500,  
  title: "Defael Cedric Metekohy",
  text: "Qui diligit disciplinam, diligit scientiam; qui autem odit increpationes, insipiens est. Terjemahan: Siapa mencintai didikan, mencintai pengetahuan, tetapi siapa membenci teguran, adalah bodoh.",
  footer: '<a href="#">Ganteng doang, due date di cepetin</a>'
});