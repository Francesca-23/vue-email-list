const { createApp } = Vue

createApp({
  data() {
    return {
        emails: [],
    }
  }, 
  created(){
    this.attivaApi()
    this.ciclo()
  },
  methods: {
      
    //funzione per ottenere i dati
      attivaApi(){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {               
            this.emails.push(response.data.response)
          })
      },
      
    //funzione per ottenere 10 mail
      ciclo(){
        for(let i=0; i<8; i++){
            this.attivaApi()   
        }
        return this.attivaApi()
      }
}
}).mount('#app')