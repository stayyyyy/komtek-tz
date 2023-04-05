<template>
    <el-table :data="name" height = "auto" class="consultationList">
        <template>

            <el-table-column prop="date" label="Дата" width="120" sortable>
            </el-table-column>
            <el-table-column prop="time" label="Время" width="120" sortable>
            </el-table-column>
            <el-table-column class-name = "symptoms" prop="symptoms" label="Симптомы" sortable>
            </el-table-column>

            <el-table-column label="" width="190">
                <template slot="header" slot-scope="">
                    <el-button type="primary" @click="$router.push('/consultation/create/' + $route.params.id)"
                        size="small">Добавить консультацию</el-button>
                </template>
                <template slot-scope="scope">
                    <el-button type="text" @click="$router.push('/consultation/edit/' + scope.row.id)"
                        size="small">Редактировать</el-button>

                    <el-button  @click="centerDialogVisible = true" type="text" size="small">Удалить</el-button>

                    <el-dialog title="Подтвердите действие" :visible.sync="centerDialogVisible" width="30%" center>
                        <span>Вы уверены, что хотите удалить консультацию?</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">Отмена</el-button>
                            <el-button type="primary" @click="deleteConsultation(scope.row.id)">Удалить</el-button>
                        </span>
                    </el-dialog>

                </template>
            </el-table-column>
        </template>
    </el-table>
</template>
  
<script>
export default {
    data() {
        return {
            search: '', // переменная нужна для поиска в таблицу
            centerDialogVisible: false, // переменная нужна для всплывающего окна при нажатии на "Удалить"
        }
    },

    methods: {
        deleteConsultation(consultationId) { // удаление пацинета
            this.centerDialogVisible = false;
            this.$store.dispatch('DELETE_CONSULTATION', consultationId); // диспатчим action удаления
        }

    },
    props: ['name'],
    computed: {
    },

}
</script>

<style scoped>

 .symptom {
    font-size: 12px;
 }
 .el-popover__reference-wrapper {
     padding-left: 10px;
 }
 .el-dialog__body {
    word-break: normal!important;
 }
 .consultationList {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    padding:5px;
    /* overflow: auto!important; */
    max-height: calc(100vh - 20px);
 }

</style>