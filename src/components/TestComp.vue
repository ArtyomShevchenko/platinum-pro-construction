
<template>
    <ul id="example-2">
        <li v-for="(item, index) in items">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
    </ul>
</template>

<script>
import Vue from "vue"

export default var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Родитель',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})
</script>