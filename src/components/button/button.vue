<template>
  <button :class="buttonClass" 
  ref="button" 
  :disabled="disabled"
  :type="nativeType"
  autofocus="autofocus"
  @click="$emit('click')"
  >
    <i :class="icon" v-if="icon && !loading"></i>
    <i class="icon-arrows_anticlockwise_dashed icon-loading" v-if="loading"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
	name: "z-button",
	props: {
		type: {
			type: String,
			default: "default",
			validator(val){
				return ["default", "primary", "success", "warning", "danger", "info", "text"].includes(val);
			}
		},
		nativeType:{
			type: String,
			default: "button",
			validator(val){
				return ["button", "submit", "reset"].includes(val);
			}
		},
		size:{
			type: String,
			validator(val){
				return ["medium","small", "mini"].includes(val);
			}
		},
		loading:Boolean,
		icon:String,
		plain:Boolean,
		round:Boolean,
		circle:Boolean,
		disabled:Boolean,
	},
	computed: {
		buttonClass(){
			return ["z-button", 
				this.type ? "z-button--" + this.type: "",
				this.size ? "z-button--" + this.size: "",
				{
					"is-plain": this.plain,
					"is-round": this.round,
					"is-circle": this.circle,
					"is-disabled": this.disabled
				}
			];
		}
	},
};
</script>

<style lang='scss' scoped>
@import './../../common/var';
.icon-loading{
  display: inline-block;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  from {transform: rotate(0deg)}
  to {transform: rotate(-360deg)}
}
.z-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #DCDFE6;
    border-color: #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &.is-circle{
      border-radius: 50%;
    }
}
.z-button--primary{
    color: #fff;
    background-color: $--color-primary;
    border-color: $--color-primary;
    &:hover{
      background-color: $--color-primary-light-2;
      border-color: $--color-primary-light-2;
    }
    &.is-plain{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-round{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-disabled{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
}
.z-button--success{
    color: #fff;
    background-color: $--color-success;
    border-color: $--color-success;
    &:hover{
      background-color: $--color-success-light-2;
      border-color: $--color-success-light-2;
    }
    &.is-plain{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-round{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-disabled{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
}
.z-button--info{
    color: #fff; 
    background-color: $--color-info;
    border-color:$--color-info;
    &:hover{
      background-color: $--color-info-light-2;
      border-color: $--color-info-light-2;
    }
    &.is-plain{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-round{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-disabled{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
}
.z-button--warning{
    color: #fff;
    background-color: $--color-warning;
    border-color: $--color-warning;
    &:hover{
      background-color: $--color-warning-light-2;
      border-color: $--color-warning-light-2;
    }
    &.is-plain{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-round{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-disabled{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
}
.z-button--danger{
    color: #fff;
    background-color: $--color-danger;
    border-color:$--color-danger;
    &:hover{
      background-color: $--color-danger-light-2;
      border-color: $--color-danger-light-2;
    }
    &.is-plain{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-round{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
    &.is-disabled{
      color:  $--color-primary-light-2;
      background:$--color-primary-light-9;
      border-color: $--color-primary-light-2;
      &:hover{
        color: #fff;
        background: #2E7AC6;
        border-color: #2E7AC6;
      }
    }
}
</style>