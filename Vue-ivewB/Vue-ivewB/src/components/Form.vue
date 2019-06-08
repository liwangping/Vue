<template>
    <div class="Form">
        <Form :model="formItem" :label-width="80">
            <FormItem label="输入框">
                <Input v-model="formItem.input" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="选择器">
                <Select v-model="formItem.select">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="日期控件">
                <Row>
                    <Col span="11">
                        <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                        <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="单选框">
                <RadioGroup v-model="formItem.radio">
                    <Radio label="male">Male</Radio>
                    <Radio label="female">Female</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="多选框">
                <CheckboxGroup v-model="formItem.checkbox">
                    <Checkbox label="Eat"></Checkbox>
                    <Checkbox label="Sleep"></Checkbox>
                    <Checkbox label="Run"></Checkbox>
                    <Checkbox label="Movie"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem label="开关">
                <i-switch v-model="formItem.switch" size="large">
                    <span slot="open">On</span>
                    <span slot="close">Off</span>
                </i-switch>
            </FormItem>
            <FormItem label="滑块">
                <Slider v-model="formItem.slider" range></Slider>
            </FormItem>
            <FormItem label="文本域">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
                <Button type="primary">提交</Button>
                <Button style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
<style scope>
    .Form{
        padding-top: 30px;
    }
</style>

