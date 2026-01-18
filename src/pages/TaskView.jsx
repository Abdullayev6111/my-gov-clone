import { useState } from 'react';
import { Box, Text, TextInput, Button, Flex, Collapse, Image } from '@mantine/core';

const TaskView = () => {
  const [openInfo1, setOpenInfo1] = useState(false);
  const [openInfo2, setOpenInfo2] = useState(false);

  const [form, setForm] = useState({
    id: '',
    pin: '',
    captcha: '',
  });

  return (
    <Box className="container" mt={30}>
      <Text
        align="center"
        style={{
          fontSize: '22px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#0083ca',
        }}
      >
        Arizaning ko‘rib chiqilishini kuzatish
      </Text>

      <Box mb="md" style={{ marginLeft: 120 }}>
        <Text fw={500} mb={5}>
          Ariza raqami
        </Text>

        <TextInput
          w={940}
          placeholder="Ariza raqami"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.currentTarget.value })}
        />

        <Text
          mt={8}
          style={{
            color: '#0068e0',
            cursor: 'pointer',
            fontSize: '14px',
          }}
          onClick={() => setOpenInfo1(!openInfo1)}
        >
          Ariza raqami qayerdan olinadi?
        </Text>

        <Collapse in={openInfo1}>
          <Box
            w={940}
            mt={10}
            p={15}
            style={{
              background: 'rgb(228 237 255)',
              border: '1px solid #BEDDEF',
              borderRadius: '6px',
            }}
          >
            <Flex gap={20} wrap="wrap">
              <Box style={{ maxWidth: 400 }}>
                <Text fw={600} mb={10}>
                  Ariza raqami qayerdan olinadi?
                </Text>

                <ul style={{ paddingLeft: 16, fontSize: 14 }}>
                  <li>Ariza yuborilganidan keyin ko‘rsatilgan shaklda</li>
                  <li>SMS-xabarda</li>
                  <li>To‘lov hujjati (invoys)da</li>
                </ul>
              </Box>
            </Flex>
          </Box>
        </Collapse>
      </Box>

      <Box mb="md" style={{ marginLeft: 120 }}>
        <Text fw={500} mb={5}>
          Arizani tekshirish uchun parol
        </Text>

        <TextInput
          w={940}
          placeholder="Tekshirish uchun parol"
          value={form.pin}
          onChange={(e) => setForm({ ...form, pin: e.currentTarget.value })}
        />

        <Text
          mt={8}
          style={{
            color: '#0068e0',
            cursor: 'pointer',
            fontSize: '14px',
          }}
          onClick={() => setOpenInfo2(!openInfo2)}
        >
          Tekshirish kodi qayerdan olinadi?
        </Text>

        <Collapse in={openInfo2}>
          <Box
            w={940}
            mt={10}
            p={15}
            style={{
              background: 'rgb(228 237 255)',
              border: '1px solid #BEDDEF',
              borderRadius: '6px',
            }}
          >
            <Flex gap={20} wrap="wrap">
              <Box style={{ maxWidth: 400 }}>
                <Text fw={600} mb={10}>
                  Tekshirish kodi qayerdan olinadi?
                </Text>

                <ul style={{ paddingLeft: 16, fontSize: 14 }}>
                  <li>Ariza yuborilganidan keyin ko‘rsatilgan shaklda</li>
                  <li>SMS-xabar orqali yuborilishi mumkin</li>
                  <li>To‘lov hujjatida (invoysda) mavjud bo‘ladi</li>
                </ul>
              </Box>
            </Flex>
          </Box>
        </Collapse>
      </Box>

      <Box mb="md" style={{ marginLeft: 120 }}>
        <Text fw={500} mb={5}>
          Himoya kodi
        </Text>

        <TextInput
          w={940}
          type="number"
          placeholder="Arifmetik amal javobini kiriting"
          value={form.captcha}
          onChange={(e) => setForm({ ...form, captcha: e.currentTarget.value })}
        />
      </Box>

      <Flex justify="center" mt={20}>
        <Button
          style={{
            backgroundColor: '#22a65a',
            borderRadius: '8px',
          }}
        >
          Ma’lumotlarni ko‘rish
        </Button>
      </Flex>
    </Box>
  );
};

export default TaskView;
