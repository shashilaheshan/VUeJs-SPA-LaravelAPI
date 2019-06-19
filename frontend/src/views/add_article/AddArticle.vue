<template>

<div>
    <div class="container" style="margin-top: 30px">

        <h1>Add Article</h1>
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="title">
            <label>Description</label>
            <input type="text" class="form-control" v-model="desc">

        </div>
        <button @click="saveData" class="btn btn-success">SAVE</button>
    </div>

</div>

</template>
<script>
    import axios from 'axios';
    import swal from 'sweetalert';
    export default {
        name:'add_article',
        data(){
            return {
                desc:null,
                title:null,
            }
        },
        methods:{
            saveData: async function (event){
                event.preventDefault();

                var title=this.title;
                var description=this.desc;

                await axios.post('/api/savearticle',{
                    title:title,
                    description:description

                }).then(res=>{

                    if(res.data){
                        swal({

                          icon:'success',
                           title:'Data Saved Successfully',
                        });
                    }
                }).catch(err=>{
                    console.log(err);
                    swal({

                        icon:'error',
                        title:err,
                    });
                })
            }
        }

    }

</script>
<style scoped></style>