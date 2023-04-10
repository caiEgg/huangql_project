import Mock from 'mockjs'
import banners from '@/mock/banners'
import floors from '@/mock/floors'

Mock.mock('/mock/banners',{code:200,data:banners})
Mock.mock('/mock/floors',{code:200,data:floors})