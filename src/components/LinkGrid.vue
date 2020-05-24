<template>
    <div class="linkGridEntry" :style="`grid-template-areas: ${getTemplateAreas()}`">
        <div v-for="(item, index) in getRootSlots()"
             :style="`grid-area: e${index}; background-color:${index % 2 !== 0 ? 'var(--contrast-background-color)' : ''}`">
            <div class="linkGridEntryHeader">
                <slot :name="`${item}-header`"/>
            </div>
            <div style="margin-top: 8px;">
                <slot :name="`${item}-description`"/>
            </div>
        </div>
        <div v-for="(item, index) in getRootSlots()"
             :style="`grid-area: e${index}-icon; background-color:${index % 2 !== 0 ? 'var(--contrast-background-color)' : ''}`"
             class="linkGridEntryIconContainer item">
            <slot :name="`${item}-link`"/>
        </div>
    </div>
</template>

<script>
    export default {
      methods: {
        getRootSlots() {
          return [... new Set(Object.keys(this.$slots).map(slotName => slotName.split('-')[0]))];
        },
        getTemplateAreas() {
          return this.getRootSlots().map((_, i) => `"e${i} e${i}-icon"`).join(' ');
        }
      },
    }
</script>

<style scoped>

    .linkGridEntry {
        display: grid;
        margin-top: 16px;
        grid-row-gap: 8px;
        grid-template-columns: auto 1.5em;
        /*--contrast-background-color: rgba(224,223,9,0.2);*/
        --contrast-background-color: red;
    }

    .linkGridEntryHeader {
        color: var(--card-title-color);
        font-size: 15pt;
        font-family: var(--card-title-font-family);
        font-weight: calc(var(--card-title-font-weight));
        line-height: var(--card-title-line-height);
    }

    .linkGridEntryIconContainer {
        display: flex;
        height: 100%;
        align-items: center;
        width: 100%;
        justify-content: center;
        color: var(--header-color)
    }

</style>
