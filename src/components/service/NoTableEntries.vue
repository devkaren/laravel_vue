<template>
    <tr>
        <td colspan="{{ colspan }}" class="px-6 py-4 whitespace-no-wrap border-gray-200 text-sm text-gray-800">
            Keine Eintr&auml;ge vorhanden.
        </td>
    </tr>

</template>
<script>
export default {
    name: 'NoTableEntries',
    props: {
        colspan: {
            type: String,
            required: true
        }
    }
}
</script>