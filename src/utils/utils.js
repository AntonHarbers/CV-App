export default function DateFormat(dateString){
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
}