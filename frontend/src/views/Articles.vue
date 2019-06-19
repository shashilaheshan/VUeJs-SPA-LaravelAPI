<template xmlns="http://www.w3.org/1999/html">
 <div>
    <h1>{{$route.meta.title}}</h1>
     <modal name="hello-world" style="padding: 30px" transition="pop-out" >
         <div class="form-group">
             <input type="text" class="form-control" v-model="singleid" disabled/>
         </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="singletitle"/>
        </div>
       <div class="form-group">
           <textarea type="text" class="form-control" v-model="singleDesc"></textarea>
       </div>
         <div class="form-group">
             <button @click="updateSinglePost(singleid,singletitle,singleDesc)" class="btn btn-success">UPDATE</button>
         </div>

     </modal>
     <table class=" table table-bordered">
         <thead>
         <th>Title</th>
         <th>Description</th>
         <th>Action</th>


         </thead>
         <tbody>
         <tr v-for="item in articles" :key="item.id">
             <td>{{item.title}}</td>
             <td>{{item.description}}</td>
             <td><button @click="deleteData(item.id)" class="btn btn-danger">DELETE</button> | <button @click="updateData(item.id)" class="btn btn-warning">UPDATE</button> </td>
         </tr>

         </tbody>


     </table>


 </div>


</template>
<script>
    import axios from 'axios';
    import swal from 'sweetalert';
    export default {
         name:'articles',
            data(){

                 return {
                     desc:null,
                     title:null,
                     articles:null,
                     singleid:null,
                     singletitle:null,
                     singleDesc:null

                 }
            },
        created() {
        this.getArticles();
         },
        methods:{

             getArticles(){

                axios.get('/api/articles').then(res=>{
                    const {data:{data}}=res
                    this.articles=data;
                    console.log(this.articles)
                }).catch(err=>{

                    console.log(err);
                });




             },
            saveData: async function (event){
                 event.preventDefault();

                 var title=this.title;
                 var description=this.desc;

                 await axios.post('/api/savearticle',{
                     title:title,
                     description:description

                 }).then(res=>{

                     if(res.data){
                         this.getArticles();
                     }
                 }).catch(err=>{
                     console.log(err);
                 })
            },
            deleteData:async function(ids)  {

                 await axios.post('/api/deletearticle',{
                     id:ids
                 })
                     .then(res=>{
                        if(res.data.response=="success"){

                            swal({
                                icon:'success',
                                title:res.data.response
                            });
                            this.getArticles();
                        }else {
                            swal({
                                icon:'error',
                                title:'something went wrong'
                            })
                        }

                     })
                     .catch(err=>{
                         swal({
                             icon:'error',
                             title:err
                         })
                     });


            },
            test(){
                 console.log('modal destryoed');
            },
            updateData:async function(ids)  {



                 await axios.post('/api/getarticle',{
                      id:ids
                 })
                     .then(res=>{
                        this.singleid=res.data.data.id;
                        this.singletitle=res.data.data.title;
                         this.singleDesc=res.data.data.description;

                     })
                     .catch(err=>{
                       console.log(err.data);
                     });

                this.$modal.show('hello-world');
                //
                // await axios.post('/api/deletearticle',{
                //     id:ids
                // })
                //     .then(res=>{
                //         if(res.data.response=="success"){
                //
                //             swal({
                //                 icon:'success',
                //                 title:res.data.response
                //             });
                //             this.getArticles();
                //         }else {
                //             swal({
                //                 icon:'error',
                //                 title:'something went wrong'
                //             })
                //         }
                //
                //     })
                //     .catch(err=>{
                //         swal({
                //             icon:'error',
                //             title:err
                //         })
                //     });


            },
            updateSinglePost:async  function(ids,title,desc){
                    await axios.post('/api/updatesinglearticle',{
                        id:ids,
                        title:title,
                        description:desc
                    })
                        .then(res=>{
                            if(res.data.response){
                                swal({
                                    icon:'success',
                                    title:'Data updated successfully'
                                })
                                this.$modal.hide('hello-world');
                                this.getArticles();
                            }else{
                                swal({
                                    icon:'error',
                                    title:'Something went wrong'
                                })
                            }
                        })
                        .catch(err=>{
                            swal({
                                icon:'error',
                                title:err.data
                            })

                        });



            }
        }

    }
</script>
