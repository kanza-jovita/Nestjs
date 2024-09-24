import { Controller,Get,Post,Param } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    getItems() {
        return 'get all items';
    }

    @Post()
    createItem() {
        return 'create an item';
    }
    @Get(':id')
    getItemById(@Param('id')id:string) {
        return `get item with id: ${id}`;
    }

}

